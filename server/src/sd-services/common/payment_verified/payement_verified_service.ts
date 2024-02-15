// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_F8uRJxFxyYnAocyM from '../../appointments/update_appointment_status/update_appointment_status_service'; //_splitter_
import * as SSD_SERVICE_ID_sd_jPPvsFExUCTPJE88 from './payment_verified_api'; //_splitter_
//append_imports_end
export class payement_verified_service {
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
    this.serviceName = 'payement_verified_service';
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
      instance = new payement_verified_service(
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
    //appendnew_flow_payement_verified_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug(
      'mounting all middlewares for service :: payement_verified_service'
    );
    //appendnew_flow_payement_verified_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: payement_verified_service');

    this.app['post'](
      `${this.serviceBasePath}/paymentverify/post`,
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
          bh = await this.sd_6y2chzYi0CZ4vkCv(bh, parentSpanInst);
          //appendnew_next_sd_1i7rY1KO01YLAl7U
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1i7rY1KO01YLAl7U');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_payement_verified_service_HttpIn
  }
  //   service flows_payement_verified_service

  //appendnew_flow_payement_verified_service_start

  async sd_6y2chzYi0CZ4vkCv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6y2chzYi0CZ4vkCv',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.callPaymentUpdate(bh, parentSpanInst);
      //appendnew_next_sd_6y2chzYi0CZ4vkCv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6y2chzYi0CZ4vkCv',
        spanInst,
        'sd_6y2chzYi0CZ4vkCv'
      );
    }
  }

  async callPaymentUpdate(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'callPaymentUpdate',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_jPPvsFExUCTPJE88Instance: SSD_SERVICE_ID_sd_jPPvsFExUCTPJE88.payment_verified_api =
        SSD_SERVICE_ID_sd_jPPvsFExUCTPJE88.payment_verified_api.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_jPPvsFExUCTPJE88Instance.updateId(
          spanInst,
          bh.input.body.payment_id
        );
      bh.local.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_uDY9DgKsIoLPb658(bh, parentSpanInst);
      //appendnew_next_callPaymentUpdate
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_z5eezRS0mfq93bl7',
        spanInst,
        'callPaymentUpdate'
      );
    }
  }

  async sd_uDY9DgKsIoLPb658(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uDY9DgKsIoLPb658',
      parentSpanInst
    );
    try {
      bh.input.appointment_id = bh.local?.response?.data?.[0]?.appointment_id;
      bh.input.status = 'paid';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.appointmentChanges(bh, parentSpanInst);
      //appendnew_next_sd_uDY9DgKsIoLPb658
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uDY9DgKsIoLPb658',
        spanInst,
        'sd_uDY9DgKsIoLPb658'
      );
    }
  }

  async appointmentChanges(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'appointmentChanges',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_F8uRJxFxyYnAocyMInstance: SSD_SERVICE_ID_sd_F8uRJxFxyYnAocyM.update_appointment_status_service =
        SSD_SERVICE_ID_sd_F8uRJxFxyYnAocyM.update_appointment_status_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_F8uRJxFxyYnAocyMInstance.appointmentStatusUpdate(
          spanInst,
          bh.input.appointment_id,
          bh.input.status
        );
      bh.local.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_QKPtr6wtO6QBmtGN(bh, parentSpanInst);
      //appendnew_next_appointmentChanges
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_krzjnA1AjEHeUgv4',
        spanInst,
        'appointmentChanges'
      );
    }
  }

  async sd_QKPtr6wtO6QBmtGN(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QKPtr6wtO6QBmtGN');
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
  //appendnew_flow_payement_verified_service_Catch
}
