// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class getHolidaysService {
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
    this.serviceName = 'getHolidaysService';
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
      instance = new getHolidaysService(
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
    //appendnew_flow_getHolidaysService_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: getHolidaysService');
    //appendnew_flow_getHolidaysService_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: getHolidaysService');
    //appendnew_flow_getHolidaysService_HttpIn
  }
  //   service flows_getHolidaysService

  async getHolidays(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getHolidays',
      parentSpanInst
    );
    let bh: any = {
      input: {},
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wY1ZbVKeVCqFfKVF(bh, parentSpanInst);
      //appendnew_next_getHolidays
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
        'sd_0928IuPYLP2vWpTG',
        spanInst,
        'getHolidays'
      );
    }
  }
  //appendnew_flow_getHolidaysService_start

  async sd_wY1ZbVKeVCqFfKVF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wY1ZbVKeVCqFfKVF',
      parentSpanInst
    );
    try {
      bh.local.query = `SELECT * FROM ${process.env.DB_SCHEMA}.holidays`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sqldb(bh, parentSpanInst);
      //appendnew_next_sd_wY1ZbVKeVCqFfKVF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wY1ZbVKeVCqFfKVF',
        spanInst,
        'sd_wY1ZbVKeVCqFfKVF'
      );
    }
  }

  async sqldb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('sqldb', parentSpanInst);
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_JFEzq9BaWr7Csm3t'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = [];
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.statusReport(bh, parentSpanInst);
      //appendnew_next_sqldb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yWhSWiX5hlJg5L5O',
        spanInst,
        'sqldb'
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
        data: bh.local.result,
      };
      console.log(bh.local.response.data, 'vyshnavv');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_statusReport
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uavIGPNPf3kGdUfR',
        spanInst,
        'statusReport'
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
  //appendnew_flow_getHolidaysService_Catch
}
