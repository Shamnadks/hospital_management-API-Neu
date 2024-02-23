// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_YQsrEeWXyNrlkzy2 from './getHolidaysService'; //_splitter_
//append_imports_end
export class getHolidaysApi {
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
    this.serviceName = 'getHolidaysApi';
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
      instance = new getHolidaysApi(
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
    //appendnew_flow_getHolidaysApi_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: getHolidaysApi');
    //appendnew_flow_getHolidaysApi_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: getHolidaysApi');

    this.app['get'](
      `${this.serviceBasePath}/holiday/get`,
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
          bh = await this.sd_wXIucguvTSCz9gpg(bh, parentSpanInst);
          //appendnew_next_sd_E8AdO1A0XtmEzH0o
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_E8AdO1A0XtmEzH0o');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_getHolidaysApi_HttpIn
  }
  //   service flows_getHolidaysApi

  //appendnew_flow_getHolidaysApi_start

  async sd_wXIucguvTSCz9gpg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wXIucguvTSCz9gpg',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_YQsrEeWXyNrlkzy2Instance: SSD_SERVICE_ID_sd_YQsrEeWXyNrlkzy2.getHolidaysService =
        SSD_SERVICE_ID_sd_YQsrEeWXyNrlkzy2.getHolidaysService.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_YQsrEeWXyNrlkzy2Instance.getHolidays(spanInst);
      bh.local.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_3MwnlcZhsGOF0FLS(bh, parentSpanInst);
      //appendnew_next_sd_wXIucguvTSCz9gpg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wXIucguvTSCz9gpg',
        spanInst,
        'sd_wXIucguvTSCz9gpg'
      );
    }
  }

  async sd_3MwnlcZhsGOF0FLS(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3MwnlcZhsGOF0FLS');
    }
  }

  async sd_ygMsPtuMPJ5lCD33(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ygMsPtuMPJ5lCD33',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: bh?.error?.message,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_3MwnlcZhsGOF0FLS(bh, parentSpanInst);
      //appendnew_next_sd_ygMsPtuMPJ5lCD33
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ygMsPtuMPJ5lCD33',
        spanInst,
        'sd_ygMsPtuMPJ5lCD33'
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
      (await this.sd_Dh9O5ehtK4UAgBlQ(bh, parentSpanInst))
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
  async sd_Dh9O5ehtK4UAgBlQ(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_ygMsPtuMPJ5lCD33', 'sd_3MwnlcZhsGOF0FLS'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_ygMsPtuMPJ5lCD33(bh, parentSpanInst);
    //appendnew_next_sd_Dh9O5ehtK4UAgBlQ
    return true;
  }
  //appendnew_flow_getHolidaysApi_Catch
}
