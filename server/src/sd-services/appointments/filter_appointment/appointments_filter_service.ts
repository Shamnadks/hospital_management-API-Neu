// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class appointments_filter_service {
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
    this.serviceName = 'appointments_filter_service';
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
      instance = new appointments_filter_service(
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
    //appendnew_flow_appointments_filter_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug(
      'mounting all middlewares for service :: appointments_filter_service'
    );
    //appendnew_flow_appointments_filter_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: appointments_filter_service');
    //appendnew_flow_appointments_filter_service_HttpIn
  }
  //   service flows_appointments_filter_service

  async getAAppointments(parentSpanInst, filter: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getAAppointments',
      parentSpanInst
    );
    let bh: any = {
      input: {
        filter,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.psqlQuery(bh, parentSpanInst);
      //appendnew_next_getAAppointments
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
        'sd_Q1CiGrwcvGgrXmSU',
        spanInst,
        'getAAppointments'
      );
    }
  }
  //appendnew_flow_appointments_filter_service_start

  async psqlQuery(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('psqlQuery', parentSpanInst);
    try {
      bh.local.query = `SELECT * FROM ${process.env.DB_SCHEMA}.appointments`;
      bh.local.queryvalues = [];
      let keys = Object.keys(bh.input.filter);
      let count = 0;
      if (keys?.length > 0) {
        bh.local.query += ' where ';
        keys.forEach((key, index) => {
          bh.local.query += key + ` IN (`;
          bh.input?.filter[key]?.forEach((element, index) => {
            bh.local.query += `$${count + 1}`;
            bh.local.queryvalues.push(element);
            if (
              bh.input?.filter[key]?.length > 1 &&
              index < bh.input?.filter[key]?.length - 1
            ) {
              bh.local.query += ', ';
            }
            count++;
          });
          bh.local.query += `)`;
          if (keys?.length > 1 && index < keys?.length - 1) {
            bh.local.query += ' AND ';
          }
        });
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getAUserSql(bh, parentSpanInst);
      //appendnew_next_psqlQuery
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3ShMsw3pjO0rWSGo',
        spanInst,
        'psqlQuery'
      );
    }
  }

  async getAUserSql(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getAUserSql',
      parentSpanInst
    );
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
      let params = bh.local.queryvalues;
      params = params ? params : [];
      bh.local.resultdata = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.statusReport(bh, parentSpanInst);
      //appendnew_next_getAUserSql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iXxHNtr5gz1RYwXj',
        spanInst,
        'getAUserSql'
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
        data: bh.local.resultdata,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_statusReport
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fKUeSvSjwBydmhTu',
        spanInst,
        'statusReport'
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
        'sd_5mDGdRmLBG2SerMv',
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
    const catchConnectedNodes = ['sd_5mDGdRmLBG2SerMv'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.statusErrorReport(bh, parentSpanInst);
    //appendnew_next_errorHandle
    return true;
  }
  //appendnew_flow_appointments_filter_service_Catch
}
