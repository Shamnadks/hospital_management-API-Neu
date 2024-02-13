// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
//append_imports_end
export class create_appointment_api {
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
    this.serviceName = 'create_appointment_api';
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
      instance = new create_appointment_api(
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
    //appendnew_flow_create_appointment_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: create_appointment_api');
    //appendnew_flow_create_appointment_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: create_appointment_api');

    this.app['post'](
      `${this.serviceBasePath}/createappointment`,
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
          bh = await this.sd_HjY06OVysBI7IHoy(bh, parentSpanInst);
          //appendnew_next_sd_y9ixOoENY4k0FX8R
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_y9ixOoENY4k0FX8R');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_create_appointment_api_HttpIn
  }
  //   service flows_create_appointment_api

  //appendnew_flow_create_appointment_api_start

  async sd_HjY06OVysBI7IHoy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HjY06OVysBI7IHoy',
      parentSpanInst
    );
    try {
      if (bh.input.body?.name?.trim()?.length == 0) {
        throw new Error('Enter some task');
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_HjY06OVysBI7IHoy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HjY06OVysBI7IHoy',
        spanInst,
        'sd_HjY06OVysBI7IHoy'
      );
    }
  }

  async sd_sFlTwhEvXWCWUW9y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sFlTwhEvXWCWUW9y',
      parentSpanInst
    );
    try {
      bh.local.tododata = {
        statusCode: 400,
        error: bh.error.message,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_vjjqGt5a4sSWfkva(bh, parentSpanInst);
      //appendnew_next_sd_sFlTwhEvXWCWUW9y
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sFlTwhEvXWCWUW9y',
        spanInst,
        'sd_sFlTwhEvXWCWUW9y'
      );
    }
  }

  async sd_vjjqGt5a4sSWfkva(bh, parentSpanInst) {
    try {
      bh.web.res
        .status(bh.local.tododata.statusCode)
        .send(bh.local.tododata.error);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vjjqGt5a4sSWfkva');
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
      (await this.sd_fmxHhskhlJNVTzJZ(bh, parentSpanInst))
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
  async sd_fmxHhskhlJNVTzJZ(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_sFlTwhEvXWCWUW9y', 'sd_vjjqGt5a4sSWfkva'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_sFlTwhEvXWCWUW9y(bh, parentSpanInst);
    //appendnew_next_sd_fmxHhskhlJNVTzJZ
    return true;
  }
  //appendnew_flow_create_appointment_api_Catch
}
