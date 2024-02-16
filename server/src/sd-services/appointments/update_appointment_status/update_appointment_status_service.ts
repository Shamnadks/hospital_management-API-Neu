// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class update_appointment_status_service {
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
    this.serviceName = 'update_appointment_status_service';
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
      instance = new update_appointment_status_service(
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
    //appendnew_flow_update_appointment_status_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug(
      'mounting all middlewares for service :: update_appointment_status_service'
    );
    //appendnew_flow_update_appointment_status_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug(
      'mounting all paths for service :: update_appointment_status_service'
    );
    //appendnew_flow_update_appointment_status_service_HttpIn
  }
  //   service flows_update_appointment_status_service

  async appointmentStatusUpdate(
    parentSpanInst,
    id: any = undefined,
    status: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'appointmentStatusUpdate',
      parentSpanInst
    );
    let bh: any = {
      input: {
        id,
        status,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateAppointment(bh, parentSpanInst);
      //appendnew_next_appointmentStatusUpdate
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
        'sd_xBNr9GfiNhVYiIj8',
        spanInst,
        'appointmentStatusUpdate'
      );
    }
  }
  //appendnew_flow_update_appointment_status_service_start

  async updateAppointment(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateAppointment',
      parentSpanInst
    );
    try {
      bh.local.query = `UPDATE ${process.env.DB_SCHEMA}.appointments SET status = $1 WHERE id = $2;`;
      bh.local.queryvalues = [bh.input.status, bh.input.id];

      console.log(bh.local.query, bh.local.queryvalues);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateAPaymentSql(bh, parentSpanInst);
      //appendnew_next_updateAppointment
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_u3hZeAdsVvbDASwL',
        spanInst,
        'updateAppointment'
      );
    }
  }

  async updateAPaymentSql(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateAPaymentSql',
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
      //appendnew_next_updateAPaymentSql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VkrwML7BOJ8XpFCc',
        spanInst,
        'updateAPaymentSql'
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
        data: {
          appointment_id: bh.input.id,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_statusReport
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VOMsu44vojdQSllp',
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
        'sd_acJiWni0BefwXzga',
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
    const catchConnectedNodes = ['sd_acJiWni0BefwXzga'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.statusErrorReport(bh, parentSpanInst);
    //appendnew_next_errorHandle
    return true;
  }
  //appendnew_flow_update_appointment_status_service_Catch
}
