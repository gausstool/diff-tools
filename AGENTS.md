# AGENTS.md

## 命令

```bash
npm run dev      # 启动开发服务器，端口 1998
npm run build   # 清理 dist，运行 tsc --noEmit，再执行 vite build
npm run lint    # ESLint 检查
npm run lint:fix # ESLint 自动修复
```

## 架构

- **入口**: `src/main.ts` → 挂载 Vue 应用，使用 Vue Router
- **路由**: `src/router/index.ts` - 自动将移动设备用户重定向到 `/mobile`
- **关键组件**: `src/views/PageEditorDiff.vue` (diff 视图), `src/domain/editor/` (Monaco 编辑器)
- **编辑模式**: Monaco Editor 配置为文本对比模式

## 注意事项

- 开发服务器使用 `strictPort`，端口 1998 必须可用
- 构建需先通过 `tsc --noEmit` 类型检查再执行 Vite 构建
- `VITE_BASE_URL` 和 `VITE_BUILD_DIR` 环境变量控制部署路径
- 移动设备自动重定向到移动端布局