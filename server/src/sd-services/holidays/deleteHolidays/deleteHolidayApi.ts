// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_u54J74Bt7KK7No30 from './deleteholidayService'; //_splitter_
//append_imports_end
export class deleteHolidayApi {
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
    this.serviceName = 'deleteHolidayApi';
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
      instance = new deleteHolidayApi(
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
    //appendnew_flow_deleteHolidayApi_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: deleteHolidayApi');
    //appendnew_flow_deleteHolidayApi_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: deleteHolidayApi');

    this.app['delete'](
      `${this.serviceBasePath}/holiday/delete`,
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
          bh = await this.sd_2gWwA4okmSyB7UZV(bh, parentSpanInst);
          //appendnew_next_sd_d6OTdP4yI2Oggbjo
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_d6OTdP4yI2Oggbjo');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_deleteHolidayApi_HttpIn
  }
  //   service flows_deleteHolidayApi

  //appendnew_flow_deleteHolidayApi_start

  async sd_2gWwA4okmSyB7UZV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2gWwA4okmSyB7UZV',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_u54J74Bt7KK7No30Instance: SSD_SERVICE_ID_sd_u54J74Bt7KK7No30.deleteholidayService =
        SSD_SERVICE_ID_sd_u54J74Bt7KK7No30.deleteholidayService.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_u54J74Bt7KK7No30Instance.deleteHolidays(
          spanInst,
          bh.input.query
        );
      bh.local.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_NvpAEzm3lrbEqVsb(bh, parentSpanInst);
      //appendnew_next_sd_2gWwA4okmSyB7UZV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2gWwA4okmSyB7UZV',
        spanInst,
        'sd_2gWwA4okmSyB7UZV'
      );
    }
  }

  async sd_NvpAEzm3lrbEqVsb(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NvpAEzm3lrbEqVsb');
    }
  }

  async sd_wr7APVwPl4F8Kbk1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wr7APVwPl4F8Kbk1',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: bh?.error?.message,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_NvpAEzm3lrbEqVsb(bh, parentSpanInst);
      //appendnew_next_sd_wr7APVwPl4F8Kbk1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wr7APVwPl4F8Kbk1',
        spanInst,
        'sd_wr7APVwPl4F8Kbk1'
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
      (await this.sd_H7KEUhNJAEWNkuqp(bh, parentSpanInst))
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
  async sd_H7KEUhNJAEWNkuqp(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_wr7APVwPl4F8Kbk1', 'sd_NvpAEzm3lrbEqVsb'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_wr7APVwPl4F8Kbk1(bh, parentSpanInst);
    //appendnew_next_sd_H7KEUhNJAEWNkuqp
    return true;
  }
  //appendnew_flow_deleteHolidayApi_Catch
}
