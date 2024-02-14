// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_iApazhDXbeGyVtBa from './payment_service'; //_splitter_
//append_imports_end
export class payment_api {
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
    this.serviceName = 'payment_api';
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
      instance = new payment_api(
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
    //appendnew_flow_payment_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: payment_api');
    //appendnew_flow_payment_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: payment_api');

    this.app['post'](
      `${this.serviceBasePath}/razorpay`,
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
          bh = await this.createdInstanse(bh, parentSpanInst);
          //appendnew_next_sd_km40Zc8lTmNthZ2S
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_km40Zc8lTmNthZ2S');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_payment_api_HttpIn
  }
  //   service flows_payment_api

  //appendnew_flow_payment_api_start

  async createdInstanse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createdInstanse',
      parentSpanInst
    );
    try {
      const Razorpay = require('razorpay');
      bh.local.instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET,
      });
      this.tracerService.sendData(spanInst, bh);
      bh = await this.generateRazorPayOrder(bh, parentSpanInst);
      //appendnew_next_createdInstanse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tNpVvNJdIKoDv0Bq',
        spanInst,
        'createdInstanse'
      );
    }
  }

  async generateRazorPayOrder(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'generateRazorPayOrder',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_iApazhDXbeGyVtBaInstance: SSD_SERVICE_ID_sd_iApazhDXbeGyVtBa.payment_service =
        SSD_SERVICE_ID_sd_iApazhDXbeGyVtBa.payment_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_iApazhDXbeGyVtBaInstance.generateRazorPayOrder(
          spanInst,
          bh.input.body.userId,
          bh.input.body.appointmentId,
          bh.input.body.orderId,
          bh.input.body.price,
          bh.local.instance
        );
      bh.local.order = outputVariables.local.order;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.statusReport(bh, parentSpanInst);
      //appendnew_next_generateRazorPayOrder
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_97Wsc6UHFwqxtP8l',
        spanInst,
        'generateRazorPayOrder'
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
        data: bh.local.order,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.paymentHttpOut(bh, parentSpanInst);
      //appendnew_next_statusReport
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wvtBfluWDUZ8ioM5',
        spanInst,
        'statusReport'
      );
    }
  }

  async paymentHttpOut(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5M72mFg41g44r7o1');
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
  //appendnew_flow_payment_api_Catch
}
