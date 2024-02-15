// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_l5yYyef8zSJYH0UY from './payment_cash_service'; //_splitter_
import * as SSD_SERVICE_ID_sd_jfya9jPAl3GjcYYn from './payment_service'; //_splitter_
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
    //appendnew_flow_payment_api_HttpIn
  }
  //   service flows_payment_api

  async paymentStart(parentSpanInst, data: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'paymentStart',
      parentSpanInst
    );
    let bh: any = {
      input: {
        data,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_N8lhrXUSksLws7ga(bh, parentSpanInst);
      //appendnew_next_paymentStart
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RFvxaGlDwTqFGT4z',
        spanInst,
        'paymentStart'
      );
    }
  }
  //appendnew_flow_payment_api_start

  async sd_N8lhrXUSksLws7ga(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_N8lhrXUSksLws7ga',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.data.payment_method,
          'cash',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_nSikfLfe51N55pHa(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.input.data.payment_method,
          'stripe',
          undefined,
          undefined
        )
      ) {
        bh = await this.createdInstanse(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_N8lhrXUSksLws7ga',
        spanInst,
        'sd_N8lhrXUSksLws7ga'
      );
    }
  }

  async sd_nSikfLfe51N55pHa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nSikfLfe51N55pHa',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_l5yYyef8zSJYH0UYInstance: SSD_SERVICE_ID_sd_l5yYyef8zSJYH0UY.payment_cash_service =
        SSD_SERVICE_ID_sd_l5yYyef8zSJYH0UY.payment_cash_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_l5yYyef8zSJYH0UYInstance.cashOrder(
          spanInst,
          bh.input.data
        );
      bh.local.resultdata = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.statusReport(bh, parentSpanInst);
      //appendnew_next_sd_nSikfLfe51N55pHa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nSikfLfe51N55pHa',
        spanInst,
        'sd_nSikfLfe51N55pHa'
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
        statusCode: bh.local.resultdata.statusCode,
        data: bh.local.resultdata.data,
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_statusReport
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MdL8CkPu98huVHVv',
        spanInst,
        'statusReport'
      );
    }
  }

  async createdInstanse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createdInstanse',
      parentSpanInst
    );
    try {
      bh.local.stripe = require('stripe')(process.env.STRIPE_SECRET_TEST_KEY);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_euDUGxX1YeixLA1x(bh, parentSpanInst);
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

  async sd_euDUGxX1YeixLA1x(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_euDUGxX1YeixLA1x',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_jfya9jPAl3GjcYYnInstance: SSD_SERVICE_ID_sd_jfya9jPAl3GjcYYn.payment_service =
        SSD_SERVICE_ID_sd_jfya9jPAl3GjcYYn.payment_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_jfya9jPAl3GjcYYnInstance.generateRazorPayOrder(
          spanInst,
          bh.local.stripe,
          bh.input.data
        );
      bh.local.resultdata = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.statusReport(bh, parentSpanInst);
      //appendnew_next_sd_euDUGxX1YeixLA1x
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_euDUGxX1YeixLA1x',
        spanInst,
        'sd_euDUGxX1YeixLA1x'
      );
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
      //appendnew_next_statusErrorReport
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K49qqfyGwtAunGqT',
        spanInst,
        'statusErrorReport'
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
    const catchConnectedNodes = ['sd_K49qqfyGwtAunGqT'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.statusErrorReport(bh, parentSpanInst);
    //appendnew_next_errorHandle
    return true;
  }
  //appendnew_flow_payment_api_Catch
}
