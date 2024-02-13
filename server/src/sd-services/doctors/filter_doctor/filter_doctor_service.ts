// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class filter_doctor_service {
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
    this.serviceName = 'filter_doctor_service';
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
      instance = new filter_doctor_service(
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
    //appendnew_flow_filter_doctor_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: filter_doctor_service');
    //appendnew_flow_filter_doctor_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: filter_doctor_service');
    //appendnew_flow_filter_doctor_service_HttpIn
  }
  //   service flows_filter_doctor_service

  async getADoctor(parentSpanInst, filter: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getADoctor',
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
      //appendnew_next_getADoctor
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
        'sd_8BHWhDa3GVzpn7tx',
        spanInst,
        'getADoctor'
      );
    }
  }
  //appendnew_flow_filter_doctor_service_start

  async psqlQuery(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('psqlQuery', parentSpanInst);
    try {
      bh.local.query = `SELECT * FROM ${process.env.DB_SCHEMA}.doctors`;
      bh.local.queryvalues = [];
      let keys = Object.keys(bh.input.filter);
      let count = 0;
      if (keys.length > 0) {
        bh.local.query += ' where ';
        keys.forEach((key, index) => {
          bh.local.query += key + ` IN (`;
          bh.input.filter[key].forEach((element, index) => {
            bh.local.query += `$${count + 1}`;
            bh.local.queryvalues.push(element);
            if (
              bh.input.filter[key].length > 1 &&
              index < bh.input.filter[key].length - 1
            ) {
              bh.local.query += ', ';
            }
            count++;
          });
          bh.local.query += `)`;
          if (keys.length > 1 && index < keys.length - 1) {
            bh.local.query += ' AND ';
          }
        });
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getADoctorSql(bh, parentSpanInst);
      //appendnew_next_psqlQuery
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nlIK0u1OsdK18P2Z',
        spanInst,
        'psqlQuery'
      );
    }
  }

  async getADoctorSql(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getADoctorSql',
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
      //appendnew_next_getADoctorSql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ushAandQIe3HRiov',
        spanInst,
        'getADoctorSql'
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
        'sd_jHv1WaodugOLVP0b',
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
  //appendnew_flow_filter_doctor_service_Catch
}
