// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_kxabzJtnUwVxiUP5 from './filter_department_service'; //_splitter_
//append_imports_end
export class filter_department_api {
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
    this.serviceName = 'filter_department_api';
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
      instance = new filter_department_api(
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
    //appendnew_flow_filter_department_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: filter_department_api');
    //appendnew_flow_filter_department_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: filter_department_api');

    this.app['post'](
      `${this.serviceBasePath}/departmentfilter/post`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

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
          bh = await this.sd_8YFgzAL66WsGBuK8(bh, parentSpanInst);
          //appendnew_next_sd_OzHkZ6ljAaL9OqCE
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_OzHkZ6ljAaL9OqCE');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_filter_department_api_HttpIn
  }
  //   service flows_filter_department_api

  //appendnew_flow_filter_department_api_start

  async sd_8YFgzAL66WsGBuK8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8YFgzAL66WsGBuK8',
      parentSpanInst
    );
    try {
      // console.log(bh,bh.input,"hiiiii")
      // console.log("drtghbjk")
      // console.log(bh)
      // console.log(bh.input.body)
      // console.log(bh.local.body)
      // console.log(bh.local)
      this.tracerService.sendData(spanInst, bh);
      bh = await this.filterDepartmentFlow(bh, parentSpanInst);
      //appendnew_next_sd_8YFgzAL66WsGBuK8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8YFgzAL66WsGBuK8',
        spanInst,
        'sd_8YFgzAL66WsGBuK8'
      );
    }
  }

  async filterDepartmentFlow(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'filterDepartmentFlow',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_kxabzJtnUwVxiUP5Instance: SSD_SERVICE_ID_sd_kxabzJtnUwVxiUP5.filter_department_service =
        SSD_SERVICE_ID_sd_kxabzJtnUwVxiUP5.filter_department_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_kxabzJtnUwVxiUP5Instance.getADepartment(
          spanInst,
          bh.input.body
        );
      bh.local.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      await this.departmentHttpOut(bh, parentSpanInst);
      //appendnew_next_filterDepartmentFlow
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7F6CWTQH2jTk6MXk',
        spanInst,
        'filterDepartmentFlow'
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
      return await this.errorHandler(bh, e, 'sd_h9APgiV2F0fMwZz2');
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
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_filter_department_api_Catch
}
