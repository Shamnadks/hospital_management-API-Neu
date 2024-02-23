// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { DmUtils } from '../../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class updateHolidaysService {
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
    this.serviceName = 'updateHolidaysService';
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
      instance = new updateHolidaysService(
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
    //appendnew_flow_updateHolidaysService_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: updateHolidaysService');
    //appendnew_flow_updateHolidaysService_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: updateHolidaysService');
    //appendnew_flow_updateHolidaysService_HttpIn
  }
  //   service flows_updateHolidaysService

  async updateHolidays(parentSpanInst, data: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'updateHolidays',
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
      bh = await this.sd_vz2AMx2O6ZUe2ati(bh, parentSpanInst);
      //appendnew_next_updateHolidays
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
        'sd_Rt8qmYnnikB6rxAK',
        spanInst,
        'updateHolidays'
      );
    }
  }
  //appendnew_flow_updateHolidaysService_start

  async sd_vz2AMx2O6ZUe2ati(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vz2AMx2O6ZUe2ati',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_JFEzq9BaWr7Csm3t');
      bh.local.result = await dmUtilsInst.updateById(
        '_EN_4bddbqrhwd',
        bh.input.data
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.statusReport(bh, parentSpanInst);
      //appendnew_next_sd_vz2AMx2O6ZUe2ati
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vz2AMx2O6ZUe2ati',
        spanInst,
        'sd_vz2AMx2O6ZUe2ati'
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
        'sd_4ZQ9u8oR0rcwqEy2',
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
  //appendnew_flow_updateHolidaysService_Catch
}
