// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { validateRequest } from '../../../middleware/SchemaValidator'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_CMgNkPiuQLSMYrJE from './updateHolidaysService'; //_splitter_
//append_imports_end
export class updateHolidaysApi {
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
    this.serviceName = 'updateHolidaysApi';
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
      instance = new updateHolidaysApi(
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
    //appendnew_flow_updateHolidaysApi_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: updateHolidaysApi');
    //appendnew_flow_updateHolidaysApi_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: updateHolidaysApi');

    this.app['put'](
      `${this.serviceBasePath}/holiday/put`,
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
          bh = await this.sd_jxyZhGNZs8OJ8glq(bh, parentSpanInst);
          //appendnew_next_sd_aYfNYSja8PGQvqsc
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_aYfNYSja8PGQvqsc');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_updateHolidaysApi_HttpIn
  }
  //   service flows_updateHolidaysApi

  //appendnew_flow_updateHolidaysApi_start

  async sd_jxyZhGNZs8OJ8glq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jxyZhGNZs8OJ8glq',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CMgNkPiuQLSMYrJEInstance: SSD_SERVICE_ID_sd_CMgNkPiuQLSMYrJE.updateHolidaysService =
        SSD_SERVICE_ID_sd_CMgNkPiuQLSMYrJE.updateHolidaysService.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CMgNkPiuQLSMYrJEInstance.updateHolidays(
          spanInst,
          bh.input.body?.holidays
        );
      bh.local.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_Tp7Vy9RfMnRJiC9K(bh, parentSpanInst);
      //appendnew_next_sd_jxyZhGNZs8OJ8glq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jxyZhGNZs8OJ8glq',
        spanInst,
        'sd_jxyZhGNZs8OJ8glq'
      );
    }
  }

  async sd_Tp7Vy9RfMnRJiC9K(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Tp7Vy9RfMnRJiC9K');
    }
  }

  async sd_8weGiDjhIPKKFIYu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8weGiDjhIPKKFIYu',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Tp7Vy9RfMnRJiC9K(bh, parentSpanInst);
      //appendnew_next_sd_8weGiDjhIPKKFIYu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8weGiDjhIPKKFIYu',
        spanInst,
        'sd_8weGiDjhIPKKFIYu'
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
      (await this.sd_pW0287GRZ3cTznB6(bh, parentSpanInst))
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
  async sd_pW0287GRZ3cTznB6(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_8weGiDjhIPKKFIYu', 'sd_Tp7Vy9RfMnRJiC9K'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_8weGiDjhIPKKFIYu(bh, parentSpanInst);
    //appendnew_next_sd_pW0287GRZ3cTznB6
    return true;
  }
  //appendnew_flow_updateHolidaysApi_Catch
}
