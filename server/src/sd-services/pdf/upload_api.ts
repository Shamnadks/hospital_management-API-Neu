// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_sebhAvpyjJHu1R1Z from './upload_service'; //_splitter_
//append_imports_end
export class upload_api {
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
    this.serviceName = 'upload_api';
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
      instance = new upload_api(
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
    //appendnew_flow_upload_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: upload_api');
    //appendnew_flow_upload_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: upload_api');

    this.app['post'](
      `${this.serviceBasePath}/uploadFile`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        options: [{ name: 'newFile', maxCount: 1 }],
      }),

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
          bh = await this.sd_lSLMbmXY7jBZsltp(bh, parentSpanInst);
          //appendnew_next_sd_TWuSo0c1NEzdhOG5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_TWuSo0c1NEzdhOG5');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_upload_api_HttpIn
  }
  //   service flows_upload_api

  //appendnew_flow_upload_api_start

  async sd_lSLMbmXY7jBZsltp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lSLMbmXY7jBZsltp',
      parentSpanInst
    );
    try {
      bh.local.file = bh.input.files?.newFile?.[0]?.buffer;
      console.log(bh.local.file);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IK8boM3iOe5vTvPT(bh, parentSpanInst);
      //appendnew_next_sd_lSLMbmXY7jBZsltp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lSLMbmXY7jBZsltp',
        spanInst,
        'sd_lSLMbmXY7jBZsltp'
      );
    }
  }

  async sd_IK8boM3iOe5vTvPT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IK8boM3iOe5vTvPT',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_sebhAvpyjJHu1R1ZInstance: SSD_SERVICE_ID_sd_sebhAvpyjJHu1R1Z.upload_service =
        SSD_SERVICE_ID_sd_sebhAvpyjJHu1R1Z.upload_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_sebhAvpyjJHu1R1ZInstance.fileUploadUsingCloudinary(
          spanInst,
          bh.local.file
        );
      bh.local.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_MpbyQa8lj0bkqLgS(bh, parentSpanInst);
      //appendnew_next_sd_IK8boM3iOe5vTvPT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IK8boM3iOe5vTvPT',
        spanInst,
        'sd_IK8boM3iOe5vTvPT'
      );
    }
  }

  async sd_MpbyQa8lj0bkqLgS(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MpbyQa8lj0bkqLgS');
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
  //appendnew_flow_upload_api_Catch
}
