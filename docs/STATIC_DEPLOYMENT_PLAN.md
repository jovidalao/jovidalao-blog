# 统一静态部署实施方案

日期：2026-10-08（Australia/Hobart）

状态：配置修改与分支预览验收已完成；尚未合并到 main 或发布新生产部署。

## 1. 目标与实施原则

保留现有 Next.js App Router、React、TypeScript、CSS Modules 和 Markdown 内容结构。所有正式构建固定采用静态导出，输出 `out`，Cloudflare Pages 继续作为主要部署平台。

完成后，开发者不需要设置 `CF_PAGES` 才能构建生产产物；本地、预览部署和正式部署使用相同构建模式。其他静态托管平台可以承接这一产物，但本次不建立第二套部署流水线。

采用小范围改动，复用现有页面与静态生成代码。现有语言路由、主题、导航、SEO、RSS 和图片展示均纳入验收。

## 2. 已确认的项目现状

以下为编写方案时的本地检查结果，不代表已重新核实 Cloudflare 控制台或 Vercel 的远程状态。

| 项目 | 当前情况 |
| --- | --- |
| 工作分支 | `main`，当前提交 `4b40483` |
| 构建配置 | `next.config.ts` 仅在 `CF_PAGES=1` 时启用 `output: "export"` 和 `images.unoptimized` |
| 现有脚本 | `dev`、`build`、`start`、`typecheck`；`start` 使用 `next start` |
| 内容来源 | `content/blog/en`、`content/blog/zh` 中的本地 Markdown |
| 文章路由 | 两种语言的文章页已有 `generateStaticParams` |
| 元数据文件 | RSS、robots 和 sitemap 已声明 `force-static` |
| 依赖版本 | 锁文件解析到 Next.js `15.5.20`，本次不升级框架 |
| 本地工具 | Node `24.19.0`、pnpm `11.25.0`；尚未确认与远程构建版本一致 |
| 部署文档 | README 记录生产平台为 Cloudflare Pages，输出目录为 `out` |
| Vercel 配置 | `vercel.json` 只指定 Next.js 框架与 `pnpm build` |
| 其他工作 | 存在另一个 `.claude` worktree 和未跟踪目录，实施时不清理、不纳入本次提交 |

## 3. 修改范围

| 文件或配置 | 实施内容 |
| --- | --- |
| `next.config.ts` | 移除 `CF_PAGES` 条件，固定静态导出与直接图片服务 |
| `package.json` | 新增静态预览入口；调整 `start`；固定包管理器版本；增加静态产物检查入口 |
| `pnpm-lock.yaml` | 仅记录本次必需的开发工具变化，避免无关依赖升级 |
| `.node-version`（新增） | 记录本次验证通过的明确 Node 版本 |
| `scripts/verify-static.mjs`（新增） | 使用 Node 标准库检查核心静态产物与站内资源引用 |
| `.gitignore` | 若 Wrangler 生成 `.wrangler/`，将其排除出版本控制 |
| `pnpm-workspace.yaml` | 使用 pnpm 10 支持的安装脚本许可配置，保留 sharp 并允许 Wrangler 的 esbuild/workerd |
| `README.md` | 改为统一静态构建、预览、发布和迁移说明 |
| `src/components/Header.tsx` | 验证中发现客户端切换语言没有同步文档语言；在共享导航中补充同步 |
| Cloudflare Pages 设置 | 核实并对齐构建命令、输出目录、工具版本和分支设置 |
| `vercel.json` | 首轮保留现有文件；它继续调用同一个静态构建，不再形成独立运行时模式 |

本次不修改页面设计、文章、产品文案、语言结构或公开 URL；不增加账户、数据库、Workers Functions、OpenNext 适配器或图片处理服务。不添加与现有路由重复的重定向规则，不改变缓存策略。

## 4. 实施步骤

### 步骤 A：记录部署基线和工具版本

1. 重新检查当前分支、未提交修改和 worktree，保留其他工作。使用独立的 `codex/static-deployment` 分支实施。
2. 在有权限的 Cloudflare 项目中记录当前成功生产部署的提交、部署 ID、构建设置及安装日志中的 Node/pnpm 版本。
3. 检查正式域名上的中英文首页、产品页、文章、RSS、robots 和 sitemap，记录状态码、最终 URL 和关键内容，作为前后对照。
4. 工具版本以最近成功的生产构建为首选；若不满足 Next.js、预览工具或受支持 Node 的要求，选择受支持的版本并完成本地与预览验证。不要仅因本机版本较新而升级。
5. 将选定的明确 Node 版本写入 `.node-version`；将明确 pnpm 版本写入 `package.json` 的 `packageManager`。Cloudflare 生产与预览环境的 `PNPM_VERSION` 与之相同；检查 `NODE_VERSION` 是否覆盖仓库文件，并消除冲突。

Cloudflare v3 构建环境不能依靠 `package.json.engines` 或锁文件格式推断上述版本，应使用官方支持的版本文件和环境变量，并从实际构建日志确认结果。[Cloudflare 构建环境说明](https://developers.cloudflare.com/pages/configuration/build-image/)

若控制台或构建日志暂时不可访问，继续完成本地修改与检查，明确记录版本和远程部署待验证项；不能据此宣称线上环境已对齐。

### 步骤 B：固定静态构建

将配置收敛为：

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

保留现有静态参数生成和元数据路由。若构建暴露兼容性问题，只修复妨碍现有功能静态生成的共同原因，不重新引入平台环境分支。

沿用当前 URL 与尾部斜杠行为；不顺带加入 `trailingSlash`、更改 canonical 或重写文章路径。默认生成的 `.html` 文件交由 Pages 按其路径规则提供。[Cloudflare 路径与 404 规则](https://developers.cloudflare.com/pages/configuration/serving-pages/)

图片继续使用现有静态资源。`unoptimized` 不负责压缩或生成不同尺寸；本次以图片正常展示为验收，不声称获得新的图片性能优化。

### 步骤 C：提供明确的开发与预览入口

保留 `next dev` 供日常热更新开发。正式产物预览使用 Cloudflare 官方 Wrangler CLI，直接服务 `out`；不自行编写 HTTP 服务或增加路由兼容层。

将与选定 Node 版本兼容的稳定 Wrangler 版本加入开发依赖并写入锁文件。它只用于本地预览，不成为站点浏览器依赖，也不改变生产部署方式。

脚本目标：

```json
{
  "dev": "next dev",
  "build": "next build",
  "preview": "pnpm check:static && wrangler pages dev out --ip 127.0.0.1",
  "start": "pnpm preview",
  "typecheck": "tsc --noEmit",
  "check:static": "node scripts/verify-static.mjs"
}
```

保留 `start` 入口并让它启动静态预览，避免现有使用者继续执行不适用的 `next start`。`preview` 和 `start` 都使用最近一次构建结果，不隐式构建；README 明确要求先执行 `pnpm build`，文件不存在时应给出可理解的错误。

Wrangler 的本地预览使用官方 `pages dev` 命令。本地预览不能代替正式 Pages 上对域名、平台配置和发布结果的验证。[Cloudflare 本地预览说明](https://developers.cloudflare.com/pages/functions/local-development/)

### 步骤 D：增加小规模静态产物检查

新增独立的 Node 检查脚本，执行失败时返回非零退出码，报出缺失的路由或资源路径。保持代码直接，不新增 HTML 解析库、测试框架或通用部署抽象。

检查范围：

- `out/index.html`、`out/404.html`、`out/robots.txt`、`out/sitemap.xml` 和 `out/rss.xml` 存在且非空。
- 源码中两种语言的公开页面均有对应 HTML。文章路径从当前 Markdown 文件路径推导，覆盖现有嵌套 slug，不把文章名写死。
- 检查生成 HTML 中可定位的本站图片、样式表和脚本引用，对本地文件检查存在性；忽略远程 URL、`data:`、锚点和无关链接，正确处理查询参数与 URL 编码。
- 不出现依赖默认服务端图片端点的 `/_next/image` 引用。

该脚本检查产物完整性，不承担浏览器交互、CSS 内部全部引用或远程链接验证。具体视觉和交互行为在下一步检查。

### 步骤 E：更新文档与部署约定

README 应给出以下完整使用流程：

```sh
pnpm install --frozen-lockfile
pnpm dev
```

发布前检查：

```sh
pnpm typecheck
pnpm build
pnpm check:static
pnpm preview
```

文档还应说明：

- 正式输出是 `out`；`.next` 是构建中间目录，不作为 Pages 部署目录。
- 不再需要手工设置 `CF_PAGES`；Cloudflare 自动提供它也不会改变构建模式。
- `start` 已改为静态预览，不再启动 Next.js 服务端。
- 内容更新触发重新构建；Server Actions、请求时 cookies、ISR 等功能需要另行评估运行时部署。[Next.js 静态导出限制](https://nextjs.org/docs/15/app/guides/static-exports#unsupported-features)
- Vercel 配置沿用统一构建；本次没有部署到 Vercel 时，不能写成“已验证 Vercel 部署”。
- 更换静态托管平台时，需要重新核对路径、404、响应头、重定向与域名行为。

Cloudflare 目标设置：

| 设置 | 目标 |
| --- | --- |
| 生产分支 | `main` |
| 构建命令 | `pnpm build` |
| 输出目录 | `out` |
| 根目录 | 仓库根目录 |
| Node 版本 | 与 `.node-version` 一致；不得被冲突环境变量覆盖 |
| pnpm 版本 | `PNPM_VERSION` 与 `packageManager` 一致 |
| 分支预览 | 开启实施分支的预览部署，使用相同构建与版本设置 |

保留 Pages Git 自动安装和部署机制，先通过日志核实锁文件未被改写且版本符合预期。不另建上传脚本或第二个自动发布入口。

## 5. 验证与验收标准

### 本地构建

1. 使用选定的 Node/pnpm，安装锁定依赖；检查锁文件没有无关框架升级。
2. 在未设置 `CF_PAGES` 的环境运行类型检查、构建和静态产物检查，全部通过。
3. 确认开发服务器可启动，静态预览可启动；从预览服务器验证实际 HTTP 行为。
4. 检查变更差异和空白错误，确保未提交 `out`、`.next`、`.wrangler` 或其他 worktree 内容。

### 页面与 HTTP 行为

| 范围 | 验收 |
| --- | --- |
| 首页与产品 | `/`、`/zh`、Converloop 和 Peelday 两种语言页面返回成功，关键文本正确 |
| 其他公开页面 | Converloop desktop、support、privacy，以及 Peelday privacy、terms 的两种语言页面正常 |
| 博客 | 两种语言列表和全部现有文章可直接访问、刷新；客户端导航亦正常 |
| 错误路径 | 不存在的页面及不存在的文章最终返回 HTTP 404，不回退成首页 200 |
| URL | 对照基线检查尾部斜杠及重定向，没有循环、错误跳转或公开 URL 变化 |
| 元数据 | canonical、语言替代链接及分享信息仍指向正式域名与正确语言路径 |
| 图片与字体 | 关键图片可加载，无明显布局跳动，字体与中文回退正常 |
| RSS / sitemap / robots | 可访问，内容与当前文章及公开路由一致 |

不把“HTML 文件存在”当成“HTTP 路由正常”，不把“浏览器能打开”当成“状态码正确”。

### 交互与布局

- 在 375px 手机宽度与常用桌面宽度检查页面，手机页面不出现横向溢出。
- 手机菜单可打开和关闭，菜单中的链接可使用，切换语言后路径正确。
- 主题切换及刷新后的偏好恢复正常。
- 键盘可以操作菜单与控件，焦点可见；现有可访问名称和语义未退化。
- 记录实际完成的检查范围；没有执行的设备或辅助技术测试不写成已通过。

### Cloudflare 分支预览

推送实施分支后，等待 Pages 预览部署成功，检查部署对应提交、Node/pnpm 版本和实际输出目录。使用其部署 URL 验证关键路由、图片、404 和移动端交互。预览环境会提供 `CF_PAGES`，这也补足了本地未设置变量的检查。

预览默认具有独立 URL；访问限制与搜索引擎控制沿用现有 Pages 设置，并在验证时检查实际响应。[Cloudflare 分支预览说明](https://developers.cloudflare.com/pages/configuration/preview-deployments/)

## 6. 发布顺序与授权范围

编写方案时只交付文档；后续“落地实现”已授权实施修改与分支预览验证。正式合并与发布按执行请求的授权范围推进，已有明确授权时不重复询问。

正式执行时的顺序：

1. 完成本地修改和检查，形成范围清晰的提交。
2. 推送实施分支，完成 Cloudflare 预览验收。
3. 记录当前成功生产部署作为回滚目标。同步核实生产与预览构建设置，确认必要的设置变更已准备好。
4. 在授权包含生产发布时合并到 `main` 并推送，等待自动部署完成。
5. 检查正式部署对应的提交与版本，验证正式域名的关键路由、资源、404 和 RSS 等文件。
6. 分别报告代码提交、本地检查、预览部署、生产部署与正式域名验证结果。

如果平台登录或权限缺失，交付已完成的代码与本地证据，列出具体待操作设置和远程验收项。不能将推送成功或本地构建成功报告为发布成功。

## 7. 回滚

发生生产路由、图片或构建回归时，停止继续发布。

- 若新生产部署已上线，恢复步骤 A 记录的最近成功生产部署，并验证正式域名。
- 对本次代码使用 Git revert 恢复原配置与脚本，不重置其他人的提交。
- 若修改了共享构建设置，同时恢复记录的旧设置，防止恢复的代码仍用不兼容环境重建。
- 修复后重新走本地、预览和线上验收。

实际回滚方法及可用目标须在发布前从平台确认，不能只依赖仓库提交号。

## 8. 完成条件与交付物

完成实施应满足：

- 正式构建不再依赖 `CF_PAGES`，统一产生完整静态站点。
- 开发、构建与静态预览入口清晰，原有 `start` 入口可用。
- Node/pnpm 版本在仓库、实际本地检查和 Cloudflare 日志之间一致。
- 现有两种语言页面、全部文章、资源、404、SEO 与交互通过相应验收。
- 文档准确说明能力边界与平台迁移方式。
- 在授权并完成生产发布的情况下，正式域名验证通过且回滚目标可用。

交付说明包括修改文件、提交、检查证据、预览及生产部署结果、未完成项。Vercel 远程部署、全站图片优化和框架升级均不作为本次完成条件。

## 9. 实施记录（2026-10-08）

### 基线与版本选择

- 上次成功生产部署：`de27fc86-26d1-41cf-929d-e104224c3ed9`，代码提交 `4b40483e9a89dda47e7701826c32faf8b462ebc6`。已从 Cloudflare 控制台与 GitHub 检查结果核实。
- 旧设置：构建命令 `npm run build`，输出 `out`，生产分支 `main`，预览覆盖所有非生产分支，环境变量 `NODE_VERSION=22`，没有固定 pnpm 的环境变量。
- 成功生产日志实际使用 Node `22.22.0` 和 pnpm `10.11.1`。日志中的 Corepack 要求 Node 至少为 `22.22.2`；因此采用这一补丁版本，保留 pnpm `10.11.1`。
- 预览工具固定 Wrangler `4.148.0`。Next.js、React 和 TypeScript 的现有锁定版本保持不变。

### 本地验证

- 未设置 `CF_PAGES` 的静态构建通过，包括构建内的类型检查。
- `pnpm check:static` 检查 20 个页面路由、21 个 HTML 文件、57 个本地资源以及 RSS、sitemap、robots 和 404，通过。
- 缺失 RSS、中文页面、图片，以及引用服务端图片端点的故障注入均正确失败；嵌套 Unicode/空格文章路径、编码资源路径、查询参数、锚点和 srcset 检查通过。临时产物与内容已恢复。
- 正式站点基线和本地预览各完成 28 个访问检查，页面、元数据文件与不存在路径的状态码符合预期；标题、canonical、语言替代链接和最终 URL 路径没有差异。
- 本地 `pnpm start` 已实际启动静态预览。Next.js 开发服务器已启动并确认首页返回 200。
- 当前执行环境的原生文件监听受限，验证进程使用临时 `WATCHPACK_POLLING` / `CHOKIDAR_USEPOLLING`，并将 Wrangler 的临时注册目录与日志放到可写目录。这些验证环境参数没有加入项目脚本或改变线上配置。
- 浏览器检查覆盖 375px 手机宽度与 1280px 桌面宽度，菜单键盘操作与可见焦点、客户端导航、语言切换、主题刷新恢复。尚未执行完整 VoiceOver 或实体手机测试。
- 验证发现已有的客户端语言切换问题，已在共享 Header 同步 `document.documentElement.lang`，确保中文页面与英文页面使用对应语言标记。

### 远程部署

- 实施提交：`3b40ce5a44e4474f6322fe5ef60f0c99e6c14739`，分支 `codex/static-deployment` 已推送。
- Cloudflare 分支预览部署：`847b904d-18e6-4f80-a487-3772140e981f`，状态成功。[已验收部署](https://847b904d.jovidalao-blog.pages.dev/)，[分支预览入口](https://codex-static-deployment.jovidalao-blog.pages.dev/)。
- 部署日志确认 Node `22.22.2`、pnpm `10.11.1`、构建命令 `pnpm build`，锁定依赖安装和静态导出均成功。
- 预览域名完成 28 个访问检查，全部符合预期。与生产基线相比，状态码、标题、canonical、语言替代链接和最终 URL 路径一致。
- 预览浏览器在 375px 下实际验证菜单键盘操作、可见焦点、客户端导航、语言切换与正确的文档语言、主题刷新恢复，未发现横向溢出或已加载图片损坏。
- Cloudflare 生产与预览构建设置均已对齐 `pnpm build` / `out`，`NODE_VERSION=22.22.2` 和 `PNPM_VERSION=10.11.1`。生产版本设置已保存；预览日志验证实际生效。
- 远程 `main` 保持原生产提交 `4b40483`。本次交付可审查的分支和成功预览，尚未合并 main 或发布新生产部署；后续发布应使用上述回滚目标并完成正式域名验收。
