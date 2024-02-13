// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { validateRequest } from '../../../middleware/SchemaValidator'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_9d3akMmIsei4wjRS from './update_department_service'; //_splitter_
//append_imports_end
export class update_department_api {
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
    this.serviceName = 'update_department_api';
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
      instance = new update_department_api(
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
    //appendnew_flow_update_department_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: update_department_api');
    //appendnew_flow_update_department_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: update_department_api');

    this.app['put'](
      `${this.serviceBasePath}/department/put`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      validateRequest(),
      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          this.sdService.addDMPropertiesToBh(bh, req, 'department');
          bh = await this.updateDepartmentScript(bh, parentSpanInst);
          //appendnew_next_sd_wPgv3lBwbkw1Of2g
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_wPgv3lBwbkw1Of2g');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_update_department_api_HttpIn
  }
  //   service flows_update_department_api

  //appendnew_flow_update_department_api_start

  async updateDepartmentScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateDepartmentScript',
      parentSpanInst
    );
    try {
      // if(!bh.input.body?.name?.title || bh.input.body?.name?.trim()?.length==0){
      // throw new Error("Enter some task");
      // }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateDepatrmentFlow(bh, parentSpanInst);
      //appendnew_next_updateDepartmentScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T7WkaVhiRF8TAgE4',
        spanInst,
        'updateDepartmentScript'
      );
    }
  }

  async updateDepatrmentFlow(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateDepatrmentFlow',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_9d3akMmIsei4wjRSInstance: SSD_SERVICE_ID_sd_9d3akMmIsei4wjRS.update_department_service =
        SSD_SERVICE_ID_sd_9d3akMmIsei4wjRS.update_department_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_9d3akMmIsei4wjRSInstance.updateDepartment(
          spanInst,
          bh.input.body?.department
        );
      bh.local.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      await this.departmentHttpOut(bh, parentSpanInst);
      //appendnew_next_updateDepatrmentFlow
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_N9thtspxbcQefnhe',
        spanInst,
        'updateDepatrmentFlow'
      );
    }
  }

  async departmentHttpOut(bh, parentSpanInst) {
    try {
      bh.web.res
        .status(bh.local.response.statusCode)
        .send(bh.local.response.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2sTEoe3dFbBr303C');
    }
  }

  async statusReport(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'statusReport',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        error: bh.error.message,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.errorHttpOut(bh, parentSpanInst);
      //appendnew_next_statusReport
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eF8LlPtUksrMn1Yi',
        spanInst,
        'statusReport'
      );
    }
  }

  async errorHttpOut(bh, parentSpanInst) {
    try {
      bh.web.res
        .status(bh.local.response.statusCode)
        .send(bh.local.response.error);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nvjyS3cLg4V9K0U8');
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
    const catchConnectedNodes = ['sd_eF8LlPtUksrMn1Yi', 'sd_nvjyS3cLg4V9K0U8'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.statusReport(bh, parentSpanInst);
    //appendnew_next_errorHandle
    return true;
  }
  //appendnew_flow_update_department_api_Catch
}
