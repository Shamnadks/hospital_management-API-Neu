// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { DmUtils } from '../../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class deleteholidayService {
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
    this.serviceName = 'deleteholidayService';
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
      instance = new deleteholidayService(
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
    //appendnew_flow_deleteholidayService_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: deleteholidayService');
    //appendnew_flow_deleteholidayService_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: deleteholidayService');
    //appendnew_flow_deleteholidayService_HttpIn
  }
  //   service flows_deleteholidayService

  async deleteHolidays(parentSpanInst, data: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'deleteHolidays',
      parentSpanInst
    );
    let bh: any = {
      input: {
        data,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hirIC6AvnRxnJCKk(bh, parentSpanInst);
      //appendnew_next_deleteHolidays
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
        'sd_3sZhdtbtCU6QRO9q',
        spanInst,
        'deleteHolidays'
      );
    }
  }
  //appendnew_flow_deleteholidayService_start

  async sd_hirIC6AvnRxnJCKk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hirIC6AvnRxnJCKk',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_JFEzq9BaWr7Csm3t');
      bh.local.result = await dmUtilsInst.delete(
        '_EN_4bddbqrhwd',
        bh.input.data.id
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.statusReport(bh, parentSpanInst);
      //appendnew_next_sd_hirIC6AvnRxnJCKk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hirIC6AvnRxnJCKk',
        spanInst,
        'sd_hirIC6AvnRxnJCKk'
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
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_statusReport
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jh29wkh2yBiAFR0H',
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
  //appendnew_flow_deleteholidayService_Catch
}
