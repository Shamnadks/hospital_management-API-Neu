// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_r0H8vsrn1p2lt1Ok from './get_appointment_flow'; //_splitter_
//append_imports_end
export class get_appointment_api {
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
    this.serviceName = 'get_appointment_api';
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
      instance = new get_appointment_api(
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
    //appendnew_flow_get_appointment_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: get_appointment_api');
    //appendnew_flow_get_appointment_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: get_appointment_api');

    this.app['post'](
      `${this.serviceBasePath}/getappointment/post`,
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
          bh = await this.sd_dclWlg04ZFKPNXXG(bh, parentSpanInst);
          //appendnew_next_sd_wsNVTVmwWivqRej0
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_wsNVTVmwWivqRej0');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_get_appointment_api_HttpIn
  }
  //   service flows_get_appointment_api

  //appendnew_flow_get_appointment_api_start

  async sd_dclWlg04ZFKPNXXG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dclWlg04ZFKPNXXG',
      parentSpanInst
    );
    try {
      // if(bh.input.body?.name?.trim()?.length){
      // }
      // throw new Error("Enter some task");
      console.log(bh.input.body);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_H4XatPBmkz1SZrBi(bh, parentSpanInst);
      //appendnew_next_sd_dclWlg04ZFKPNXXG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dclWlg04ZFKPNXXG',
        spanInst,
        'sd_dclWlg04ZFKPNXXG'
      );
    }
  }

  async sd_H4XatPBmkz1SZrBi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_H4XatPBmkz1SZrBi',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_r0H8vsrn1p2lt1OkInstance: SSD_SERVICE_ID_sd_r0H8vsrn1p2lt1Ok.get_appointment_flow =
        SSD_SERVICE_ID_sd_r0H8vsrn1p2lt1Ok.get_appointment_flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_r0H8vsrn1p2lt1OkInstance.getAppointmentFlow(
          spanInst,
          bh.input.body
        );
      bh.local.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_qg9b7pmCegv5dYQI(bh, parentSpanInst);
      //appendnew_next_sd_H4XatPBmkz1SZrBi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H4XatPBmkz1SZrBi',
        spanInst,
        'sd_H4XatPBmkz1SZrBi'
      );
    }
  }

  async sd_qg9b7pmCegv5dYQI(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qg9b7pmCegv5dYQI');
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
        'sd_uLH869UGuLEvSF1B',
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
      return await this.errorHandler(bh, e, 'sd_YB6pfx8ZpUqi1tMZ');
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
    const catchConnectedNodes = ['sd_uLH869UGuLEvSF1B', 'sd_YB6pfx8ZpUqi1tMZ'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.statusReport(bh, parentSpanInst);
    //appendnew_next_errorHandle
    return true;
  }
  //appendnew_flow_get_appointment_api_Catch
}
