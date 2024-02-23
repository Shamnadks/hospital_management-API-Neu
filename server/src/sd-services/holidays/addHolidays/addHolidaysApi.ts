// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { validateRequest } from '../../../middleware/SchemaValidator'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_Z1cnyfcmgp7odfpP from './addHolidaysService'; //_splitter_
//append_imports_end
export class addHolidaysApi {
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
    this.serviceName = 'addHolidaysApi';
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
      instance = new addHolidaysApi(
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
    //appendnew_flow_addHolidaysApi_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: addHolidaysApi');
    //appendnew_flow_addHolidaysApi_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: addHolidaysApi');

    this.app['post'](
      `${this.serviceBasePath}/holiday/post`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      validateRequest(),
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
          this.sdService.addDMPropertiesToBh(bh, req, 'holidays');
          bh = await this.sd_a9e8sOi3knu7LyQi(bh, parentSpanInst);
          //appendnew_next_sd_3UfWTU6I5bi06vlR
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3UfWTU6I5bi06vlR');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_addHolidaysApi_HttpIn
  }
  //   service flows_addHolidaysApi

  //appendnew_flow_addHolidaysApi_start

  async sd_a9e8sOi3knu7LyQi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a9e8sOi3knu7LyQi',
      parentSpanInst
    );
    try {
      console.log(bh.input.body);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XfoLKojRBX3zyjNJ(bh, parentSpanInst);
      //appendnew_next_sd_a9e8sOi3knu7LyQi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a9e8sOi3knu7LyQi',
        spanInst,
        'sd_a9e8sOi3knu7LyQi'
      );
    }
  }

  async sd_XfoLKojRBX3zyjNJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XfoLKojRBX3zyjNJ',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_Z1cnyfcmgp7odfpPInstance: SSD_SERVICE_ID_sd_Z1cnyfcmgp7odfpP.addHolidaysService =
        SSD_SERVICE_ID_sd_Z1cnyfcmgp7odfpP.addHolidaysService.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_Z1cnyfcmgp7odfpPInstance.addHolidays(
          spanInst,
          bh.input.body.holidays
        );
      bh.local.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_g4nOTjxOeyXdNDR4(bh, parentSpanInst);
      //appendnew_next_sd_XfoLKojRBX3zyjNJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XfoLKojRBX3zyjNJ',
        spanInst,
        'sd_XfoLKojRBX3zyjNJ'
      );
    }
  }

  async sd_g4nOTjxOeyXdNDR4(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_g4nOTjxOeyXdNDR4');
    }
  }

  async sd_YV6lgEvSaQT35dGj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YV6lgEvSaQT35dGj',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: bh?.error?.message,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_g4nOTjxOeyXdNDR4(bh, parentSpanInst);
      //appendnew_next_sd_YV6lgEvSaQT35dGj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YV6lgEvSaQT35dGj',
        spanInst,
        'sd_YV6lgEvSaQT35dGj'
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
      (await this.sd_YvnoqQqaiXWWc8ZV(bh, parentSpanInst))
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
  async sd_YvnoqQqaiXWWc8ZV(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_YV6lgEvSaQT35dGj', 'sd_g4nOTjxOeyXdNDR4'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_YV6lgEvSaQT35dGj(bh, parentSpanInst);
    //appendnew_next_sd_YvnoqQqaiXWWc8ZV
    return true;
  }
  //appendnew_flow_addHolidaysApi_Catch
}
