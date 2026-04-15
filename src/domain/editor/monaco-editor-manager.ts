import { editor } from "monaco-editor/esm/vs/editor/editor.api";

export class EditorManager {
  private static editorList: editor.IStandaloneCodeEditor[] = [];
  private static diffEditorList: editor.IStandaloneDiffEditor[] = [];
  
  public static addEditor(editor: editor.IStandaloneCodeEditor) {
    this.editorList.push(editor);
  }
  
  public static addDiffEditor(editor: editor.IStandaloneDiffEditor) {
    this.diffEditorList.push(editor);
  }
  
  public static dispose() {
    this.editorList.forEach(editor => {
      try {
        editor.dispose();
      } catch (error) {
        console.error('Error disposing editor:', error);
      }
    });
    
    this.diffEditorList.forEach(editor => {
      try {
        editor.dispose();
      } catch (error) {
        console.error('Error disposing diff editor:', error);
      }
    });
    
    this.editorList = [];
    this.diffEditorList = [];
  }
}
