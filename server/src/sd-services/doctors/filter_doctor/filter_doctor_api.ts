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
export class filter_doctor_api {
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
    this.serviceName = 'filter_doctor_api';
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
      instance = new filter_doctor_api(
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
    //appendnew_flow_filter_doctor_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: filter_doctor_api');
    //appendnew_flow_filter_doctor_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: filter_doctor_api');

    this.app['post'](
      `${this.serviceBasePath}/doctorfilter/post`,
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
          //appendnew_next_sd_tdnWYSU7UxtMf9qn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_tdnWYSU7UxtMf9qn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_filter_doctor_api_HttpIn
  }
  //   service flows_filter_doctor_api

  //appendnew_flow_filter_doctor_api_start

  async departmentFinderScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'departmentFinderScript',
      parentSpanInst
    );
    try {
      bh.input.filterdata = {
        tablename: 'doctors',
        columns: [
          `${process.env.DB_SCHEMA}.doctors.*, (SELECT name FROM ${process.env.DB_SCHEMA}.department WHERE id = doctors.department_id) AS department_name`,
        ],
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
        'sd_Kluq5isJjjSQXQDz',
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
        'sd_w91mvKR9DmiwMo3c',
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
      return await this.errorHandler(bh, e, 'sd_2lEfIThZi1GmM9pq');
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
      await this.errorHttpOut(bh, parentSpanInst);
      //appendnew_next_statusErrorReport
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GntIaicmSUo51YAG',
        spanInst,
        'statusErrorReport'
      );
    }
  }

  async errorHttpOut(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wTioPyoL73qQmV4F');
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
    const catchConnectedNodes = ['sd_GntIaicmSUo51YAG', 'sd_wTioPyoL73qQmV4F'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.statusErrorReport(bh, parentSpanInst);
    //appendnew_next_errorHandle
    return true;
  }
  //appendnew_flow_filter_doctor_api_Catch
}
