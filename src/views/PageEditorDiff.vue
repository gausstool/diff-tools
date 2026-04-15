<template>
  <div class="page-editor-diff" id="editor-diff">
    <div ref="diffEditorContainer" class="container"></div>
  </div>
</template>

<script setup lang="ts">
import localforage from 'localforage';
import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import * as monaco from 'monaco-editor';
import { EditorManager } from '@/domain/editor/monaco-editor-manager';
import { createEditorDiff, addCommandSave, createEditorModel } from '@/domain/editor/monaco-editor';

const code1Default = `// 粘贴需要进行比对的代码
void main() {
  printf("hello, world");
}
`;

const code2Default = `// 粘贴需要进行比对的代码
function main() { 
  console.log("Hello World!"); 
}
`;

const diffEditorContainer = ref<HTMLDivElement>();
let diffEditor: monaco.editor.IStandaloneDiffEditor | null = null;
let currentLanguage = 'javascript';

const route = useRoute();

async function save() {
  if (!diffEditor) return;
  const code1 = diffEditor.getOriginalEditor().getValue();
  const code2 = diffEditor.getModifiedEditor().getValue();
  await localforage.setItem(`diff-tools-${String(route.name)}`, { code1, code2 });
}

async function fetch() {
  const value: any = await localforage.getItem(`diff-tools-${String(route.name)}`);
  const { code1 = '', code2 = '' } = value || {};
  if (diffEditor) {
    diffEditor.setModel({
      original: createEditorModel(code1 || code1Default, currentLanguage),
      modified: createEditorModel(code2 || code2Default, currentLanguage)
    });
  }
}

onMounted(async () => {
  if (!diffEditorContainer.value) return;
  
  diffEditor = createEditorDiff(diffEditorContainer.value);
  
  EditorManager.addDiffEditor(diffEditor);
  await fetch();
  
  // 添加保存命令
  addCommandSave(diffEditor, () => {
    save();
  });
});

onUnmounted(() => {
  EditorManager.dispose();
});
</script>

<style scoped>
.page-editor-diff {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  width: 100%;
  height: 100%;
}
</style>
