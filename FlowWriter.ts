export class FlowWriter {
  constructor() {}

  public writeSimpleConditionalFlow(expression: boolean, flow: any): void {
    if (expression) {
      flow();
    }
  }

  public writeComplexConditionalFlow(
    expressionToFlowMappingArray: Array<any>,
    isChaining: boolean
  ): void {
    for (const expressionToFlowMap of expressionToFlowMappingArray) {
      if (!!expressionToFlowMap.condition) {
        expressionToFlowMap.flow();
        if (!!isChaining) {
          return;
        }
      }
    }
  }

  public writeSwitchCase(type: any, caseToFlowMappingArray: Array<any>): void {
    for (const caseToFlowMap of caseToFlowMappingArray) {
      if (type === caseToFlowMap.case) {
        caseToFlowMap.flow();
        if (!!caseToFlowMap.isBreak) {
          break;
        }
      }
    }
  }

  public writeIterationOverArray(arr: Array<any>, flow: any): void {
    for (let index = 0; index < arr.length; index++) {
      flow(arr[index], index, arr);
    }
  }

  public writeIterationOverObject(obj: any, flow: any): void {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        flow(prop, obj[prop], obj);
      }
    }
  }
}
