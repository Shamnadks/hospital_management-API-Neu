// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class upload_service {
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
    this.serviceName = 'upload_service';
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
      instance = new upload_service(
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
    //appendnew_flow_upload_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: upload_service');
    //appendnew_flow_upload_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: upload_service');
    //appendnew_flow_upload_service_HttpIn
  }
  //   service flows_upload_service

  async fileUploadUsingCloudinary(
    parentSpanInst,
    file: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'fileUploadUsingCloudinary',
      parentSpanInst
    );
    let bh: any = {
      input: {
        file,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_f2tNU0J51OFa6LCY(bh, parentSpanInst);
      //appendnew_next_fileUploadUsingCloudinary
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
        'sd_07iEQZ9DJSG3sXxR',
        spanInst,
        'fileUploadUsingCloudinary'
      );
    }
  }
  //appendnew_flow_upload_service_start

  async sd_f2tNU0J51OFa6LCY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_f2tNU0J51OFa6LCY',
      parentSpanInst
    );
    try {
      bh.local.cloudinary = require('cloudinary');

      bh.local.data = {};
      // cloudinary Configuration
      bh.local.cloudinary.config({
        cloud_name: process.env.CD_NAME,
        api_key: process.env.CD_API_KEY,
        api_secret: process.env.CD_API_SECRET,
      });

      let uploadPromise = new Promise((resolve) => {
        bh.local.cloudinary.v2.uploader
          .upload_stream((error, uploadResult) => {
            if (error) {
              reject(error);
            } else {
              resolve(uploadResult);
            }
          })
          .end(bh.input.file);
      });
      let uploadResult = await uploadPromise;
      // Assigning data to rafh
      bh.local.data = uploadResult;
      console.log(bh.local.data);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8TLVnvrRSr6Kwcio(bh, parentSpanInst);
      //appendnew_next_sd_f2tNU0J51OFa6LCY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_f2tNU0J51OFa6LCY',
        spanInst,
        'sd_f2tNU0J51OFa6LCY'
      );
    }
  }

  async sd_8TLVnvrRSr6Kwcio(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8TLVnvrRSr6Kwcio',
      parentSpanInst
    );
    try {
      console.log(bh.local.data, 'trvrfcsd');
      bh.local.response = {
        statusCode: 200,
        data: bh.local.data,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_8TLVnvrRSr6Kwcio
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8TLVnvrRSr6Kwcio',
        spanInst,
        'sd_8TLVnvrRSr6Kwcio'
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
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_upload_service_Catch
}
