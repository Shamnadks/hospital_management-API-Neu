// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkB from '../../filter/filterservice'; //_splitter_
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
          bh = await this.departmentFinderScript(bh, parentSpanInst);
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

  async departmentFinderScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'departmentFinderScript',
      parentSpanInst
    );
    try {
      bh.input.filterdata = {
        tablename: 'department',
        datas: { ...bh.input.body },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.departmentFilter(bh, parentSpanInst);
      //appendnew_next_departmentFinderScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Jxfm1oAFGrCw7RMz',
        spanInst,
        'departmentFinderScript'
      );
    }
  }

  async departmentFilter(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'departmentFilter',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkBInstance: SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkB.filterservice =
        SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkB.filterservice.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkBInstance.filterSpecific(
          spanInst,
          bh.input.filterdata
        );
      bh.local.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      await this.departmentHttpOut(bh, parentSpanInst);
      //appendnew_next_departmentFilter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_N55t5d5Ymn733dRF',
        spanInst,
        'departmentFilter'
      );
    }
  }

  async departmentHttpOut(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_h9APgiV2F0fMwZz2');
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
        'sd_dgw8DkwY1xjx5hh3',
        spanInst,
        'statusReport'
      );
    }
  }

  async errorHttpOut(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EABCrn2UU2dw0BzU');
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
    const catchConnectedNodes = ['sd_dgw8DkwY1xjx5hh3', 'sd_EABCrn2UU2dw0BzU'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.statusReport(bh, parentSpanInst);
    //appendnew_next_errorHandle
    return true;
  }
  //appendnew_flow_filter_department_api_Catch
}
