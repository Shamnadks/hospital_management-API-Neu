// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_F8uRJxFxyYnAocyM from './update_appointment_status_service'; //_splitter_
//append_imports_end
export class update_appointment_status_api {
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
    this.serviceName = 'update_appointment_status_api';
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
      instance = new update_appointment_status_api(
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
    //appendnew_flow_update_appointment_status_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug(
      'mounting all middlewares for service :: update_appointment_status_api'
    );
    //appendnew_flow_update_appointment_status_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug(
      'mounting all paths for service :: update_appointment_status_api'
    );

    this.app['post'](
      `${this.serviceBasePath}/updateappointment/post`,
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
          bh = await this.updateAppointment(bh, parentSpanInst);
          //appendnew_next_sd_jhr8yzexT8TcsS4p
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jhr8yzexT8TcsS4p');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_update_appointment_status_api_HttpIn
  }
  //   service flows_update_appointment_status_api

  //appendnew_flow_update_appointment_status_api_start

  async updateAppointment(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateAppointment',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_F8uRJxFxyYnAocyMInstance: SSD_SERVICE_ID_sd_F8uRJxFxyYnAocyM.update_appointment_status_service =
        SSD_SERVICE_ID_sd_F8uRJxFxyYnAocyM.update_appointment_status_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_F8uRJxFxyYnAocyMInstance.appointmentStatusUpdate(
          spanInst,
          bh.input.body.id,
          bh.input.body.status
        );
      bh.local.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_AGntFaIFngyDhceB(bh, parentSpanInst);
      //appendnew_next_updateAppointment
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ry85RP7QGhQDHnnS',
        spanInst,
        'updateAppointment'
      );
    }
  }

  async sd_AGntFaIFngyDhceB(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AGntFaIFngyDhceB');
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
        'sd_9P7Yst5PYetdCMsI',
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
      return await this.errorHandler(bh, e, 'sd_oY8ITsWUozFEb6aF');
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
    const catchConnectedNodes = ['sd_9P7Yst5PYetdCMsI', 'sd_oY8ITsWUozFEb6aF'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.statusErrorReport(bh, parentSpanInst);
    //appendnew_next_errorHandle
    return true;
  }
  //appendnew_flow_update_appointment_status_api_Catch
}
