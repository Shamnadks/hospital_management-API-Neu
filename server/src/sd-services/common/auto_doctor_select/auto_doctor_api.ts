// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_bthY8bjd638CxsCf from './auto_doctor_service'; //_splitter_
//append_imports_end
export class auto_doctor_api {
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
    this.serviceName = 'auto_doctor_api';
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
      instance = new auto_doctor_api(
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
    //appendnew_flow_auto_doctor_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: auto_doctor_api');
    //appendnew_flow_auto_doctor_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: auto_doctor_api');

    this.app['post'](
      `${this.serviceBasePath}/selectdoctor/post`,
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
          bh = await this.selectDoctor(bh, parentSpanInst);
          //appendnew_next_sd_w9bg918Za3ee5ogm
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_w9bg918Za3ee5ogm');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_auto_doctor_api_HttpIn
  }
  //   service flows_auto_doctor_api

  //appendnew_flow_auto_doctor_api_start

  async selectDoctor(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'selectDoctor',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_bthY8bjd638CxsCfInstance: SSD_SERVICE_ID_sd_bthY8bjd638CxsCf.auto_doctor_service =
        SSD_SERVICE_ID_sd_bthY8bjd638CxsCf.auto_doctor_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_bthY8bjd638CxsCfInstance.autoDoctorSelect(
          spanInst,
          bh.input.body?.id
        );
      bh.local.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_Gr0L2UwcEywl9KWJ(bh, parentSpanInst);
      //appendnew_next_selectDoctor
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1vHDBTP4uqWTB67f',
        spanInst,
        'selectDoctor'
      );
    }
  }

  async sd_Gr0L2UwcEywl9KWJ(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Gr0L2UwcEywl9KWJ');
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
  //appendnew_flow_auto_doctor_api_Catch
}
