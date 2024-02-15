// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class payment_verified_api {
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
    this.serviceName = 'payment_verified_api';
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
      instance = new payment_verified_api(
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
    //appendnew_flow_payment_verified_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: payment_verified_api');
    //appendnew_flow_payment_verified_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: payment_verified_api');
    //appendnew_flow_payment_verified_api_HttpIn
  }
  //   service flows_payment_verified_api

  async updateId(parentSpanInst, id: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan('updateId', parentSpanInst);
    let bh: any = {
      input: {
        id,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateQuery(bh, parentSpanInst);
      //appendnew_next_updateId
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
        'sd_oT55kVeDRazWZne4',
        spanInst,
        'updateId'
      );
    }
  }
  //appendnew_flow_payment_verified_api_start

  async updateQuery(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateQuery',
      parentSpanInst
    );
    try {
      bh.local.query = `UPDATE ${process.env.DB_SCHEMA}.payments SET status = 'completed' WHERE payment_id = $1;`;
      bh.local.queryvalues = [bh.input.id];

      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateAPaymentSql(bh, parentSpanInst);
      //appendnew_next_updateQuery
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_crwvwgJrPsezkhQI',
        spanInst,
        'updateQuery'
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
      bh = await this.payemntappointment(bh, parentSpanInst);
      //appendnew_next_updateAPaymentSql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_h4NNGlMVCOxt08ZF',
        spanInst,
        'updateAPaymentSql'
      );
    }
  }

  async payemntappointment(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'payemntappointment',
      parentSpanInst
    );
    try {
      bh.local.query2 = `SELECT * FROM ${process.env.DB_SCHEMA}.payments WHERE payment_id = $1;`;
      console.log(bh.local.query2);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.findAPaymentSql(bh, parentSpanInst);
      //appendnew_next_payemntappointment
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DX3FYHYy3qqEBITe',
        spanInst,
        'payemntappointment'
      );
    }
  }

  async findAPaymentSql(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'findAPaymentSql',
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
        bh.local.query2,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.statusReport(bh, parentSpanInst);
      //appendnew_next_findAPaymentSql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ExdGs6B0KOmIlnTp',
        spanInst,
        'findAPaymentSql'
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
      console.log(bh.local.response);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_statusReport
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mFQeA3zjBCLIINb1',
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
        'sd_x5ZpxW5EwaXhSS9d',
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
    const catchConnectedNodes = ['sd_x5ZpxW5EwaXhSS9d'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.statusErrorReport(bh, parentSpanInst);
    //appendnew_next_errorHandle
    return true;
  }
  //appendnew_flow_payment_verified_api_Catch
}
