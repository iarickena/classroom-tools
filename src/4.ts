class ClassroomTools {
  private static readonly INSTANCE = new ClassroomTools();

  public static getInstance(): ClassroomTools {
    return this.INSTANCE;
  }

  public createTool(name: string, description: string): Tool {
    const tool = new Tool(name, description);
    this.tools.push(tool);
    return tool;
  }

  private tools: Tool[] = [];
}
