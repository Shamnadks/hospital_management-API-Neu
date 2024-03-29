// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { schedule, validate } from 'node-cron'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class cron_job {
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
    this.serviceName = 'cron_job';
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
      instance = new cron_job(
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
    if (validate('*/30 * * * * *')) {
      let bh = this.sdService.__constructDefault({});
      let flag = true;
      schedule(
        '*/30 * * * * *',
        async () => {
          await this.sd_ifVezXirS1daO6Bp(null, bh);
        },
        {
          scheduled: typeof flag == 'string' ? flag == 'true' : flag,
          timezone: '',
        }
      );
    } else {
      throw '*/30 * * * * *' + ' expression is not valid';
    }

    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_cron_job_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: cron_job');
    //appendnew_flow_cron_job_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: cron_job');
    //appendnew_flow_cron_job_HttpIn
  }
  //   service flows_cron_job

  async sd_ifVezXirS1daO6Bp(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'sd_ifVezXirS1daO6Bp',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ifVezXirS1daO6Bp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ifVezXirS1daO6Bp',
        spanInst,
        'sd_ifVezXirS1daO6Bp'
      );
    }
  }

  //appendnew_flow_cron_job_start

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
  //appendnew_flow_cron_job_Catch
}
