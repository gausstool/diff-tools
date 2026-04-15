import { editor, KeyCode, KeyMod } from "monaco-editor/esm/vs/editor/editor.api";
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution";
import 'monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution';
import 'monaco-editor/esm/vs/basic-languages/sql/sql.contribution';

export function createEditorModel(value: string, language: string) {
  const model = editor.createModel(value, language);
  return model;
}

export function setModelLanguage(model: editor.ITextModel, language: string) {
  editor.setModelLanguage(model, language);
}

export function createEditorInstance(
  $container: HTMLElement,
  model: editor.ITextModel,
  option?: editor.IStandaloneEditorConstructionOptions
) {
  const editorIns = editor.create($container, {
    theme: "vs-dark",
    automaticLayout: true, // 自动布局
    folding: true,
    wordWrap: "on", // 自动换行
    model: model,
    ...option,
  });
  return editorIns;
}

export function createEditorDiff($container: HTMLElement) {
  const editorIns = editor.createDiffEditor($container, {
    foldingStrategy: "indentation",
    autoClosingOvertype: "always",
    autoIndent: "full",
    theme: "vs-dark",
    automaticLayout: true, // 自动布局
    diffAlgorithm: "advanced",
    originalEditable: true, // for left pane
    readOnly: false, // for right pane
  });
  return editorIns;
}

export function addCommandSave(
  editor: editor.IStandaloneCodeEditor | editor.IStandaloneDiffEditor,
  callback: () => void
) {
  editor.addCommand(KeyMod.CtrlCmd | KeyCode.KeyS, function () {
    if (callback) {
      callback();
    }
  });
}
