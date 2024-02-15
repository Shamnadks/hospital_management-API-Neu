// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { DmUtils } from '../../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class create_department_service {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'create_department_service';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new create_department_service(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_create_department_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug(
      'mounting all middlewares for service :: create_department_service'
    );
    //appendnew_flow_create_department_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: create_department_service');
    //appendnew_flow_create_department_service_HttpIn
  }
  //   service flows_create_department_service

  async createDepartmentFlow(parentSpanInst, data: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'createDepartmentFlow',
      parentSpanInst
    );
    let bh: any = {
      input: {
        data,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.insertDepartment(bh, parentSpanInst);
      //appendnew_next_createDepartmentFlow
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Bb6xmtxiAQDd60jq',
        spanInst,
        'createDepartmentFlow'
      );
    }
  }
  //appendnew_flow_create_department_service_start

  async insertDepartment(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'insertDepartment',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_JFEzq9BaWr7Csm3t');
      bh.local.resultdata = await dmUtilsInst.insert(
        '_EN_6ajjf9pg1n',
        bh.input.data
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.statusReport(bh, parentSpanInst);
      //appendnew_next_insertDepartment
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OcTE3BdGyLolikdb',
        spanInst,
        'insertDepartment'
      );
    }
  }

  async statusReport(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'statusReport',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        data: bh.local.resultdata,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_statusReport
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8WtObzBghtbS8lDH',
        spanInst,
        'statusReport'
      );
    }
  }

  async statusErrorReport(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'statusErrorReport',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        error: bh.error.message,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_statusErrorReport
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4S8K4x7uPJvzU9bv',
        spanInst,
        'statusErrorReport'
      );
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false ||
      (await this.errorHandle(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async errorHandle(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_4S8K4x7uPJvzU9bv'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.statusErrorReport(bh, parentSpanInst);
    //appendnew_next_errorHandle
    return true;
  }
  //appendnew_flow_create_department_service_Catch
}
