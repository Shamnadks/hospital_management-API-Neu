// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_eBuPhijos3M7fnVJ from './appointment_service'; //_splitter_
//append_imports_end
export class appointment_api {
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
    this.serviceName = 'appointment_api';
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
      instance = new appointment_api(
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
    //appendnew_flow_appointment_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: appointment_api');
    //appendnew_flow_appointment_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: appointment_api');

    this.app['post'](
      `${this.serviceBasePath}/appointment/post`,
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
          bh = await this.sd_hjo0XAxNzyyBcAo6(bh, parentSpanInst);
          //appendnew_next_sd_0UfJ8MQ7hEc6pMEi
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0UfJ8MQ7hEc6pMEi');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_appointment_api_HttpIn
  }
  //   service flows_appointment_api

  //appendnew_flow_appointment_api_start

  async sd_hjo0XAxNzyyBcAo6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hjo0XAxNzyyBcAo6',
      parentSpanInst
    );
    try {
      // if(bh.input.body?.name?.trim()?.length){
      // }
      // throw new Error("Enter some task");
      console.log(bh.input.body);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HZxUST9U2c5JQ9Nq(bh, parentSpanInst);
      //appendnew_next_sd_hjo0XAxNzyyBcAo6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hjo0XAxNzyyBcAo6',
        spanInst,
        'sd_hjo0XAxNzyyBcAo6'
      );
    }
  }

  async sd_HZxUST9U2c5JQ9Nq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HZxUST9U2c5JQ9Nq',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_eBuPhijos3M7fnVJInstance: SSD_SERVICE_ID_sd_eBuPhijos3M7fnVJ.appointment_service =
        SSD_SERVICE_ID_sd_eBuPhijos3M7fnVJ.appointment_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_eBuPhijos3M7fnVJInstance.createAppointmentFlow(
          spanInst,
          bh.input.body
        );
      bh.local.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_Szkt0BtttEI7aGrB(bh, parentSpanInst);
      //appendnew_next_sd_HZxUST9U2c5JQ9Nq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HZxUST9U2c5JQ9Nq',
        spanInst,
        'sd_HZxUST9U2c5JQ9Nq'
      );
    }
  }

  async sd_Szkt0BtttEI7aGrB(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Szkt0BtttEI7aGrB');
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
        'sd_lpuPQ0SlnLQu9iWb',
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
      return await this.errorHandler(bh, e, 'sd_NntvQ1e63azDJXPb');
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
    const catchConnectedNodes = ['sd_lpuPQ0SlnLQu9iWb', 'sd_NntvQ1e63azDJXPb'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.statusReport(bh, parentSpanInst);
    //appendnew_next_errorHandle
    return true;
  }
  //appendnew_flow_appointment_api_Catch
}
