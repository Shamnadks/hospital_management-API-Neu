// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
//append_imports_end
export class payment_service {
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
    this.serviceName = 'payment_service';
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
      instance = new payment_service(
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
    //appendnew_flow_payment_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: payment_service');
    //appendnew_flow_payment_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: payment_service');
    //appendnew_flow_payment_service_HttpIn
  }
  //   service flows_payment_service

  async generateRazorPayOrder(
    parentSpanInst,
    userId: any = undefined,
    appointmentId: any = undefined,
    orderId: any = undefined,
    price: any = undefined,
    instance: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'generateRazorPayOrder',
      parentSpanInst
    );
    let bh: any = {
      input: {
        userId,
        appointmentId,
        orderId,
        price,
        instance,
      },
      local: {
        order: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.paymentScript(bh, parentSpanInst);
      //appendnew_next_generateRazorPayOrder
      return (
        // formatting output variables
        {
          input: {},
          local: {
            order: bh.local.order,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T2Za2TH8DXV6A90R',
        spanInst,
        'generateRazorPayOrder'
      );
    }
  }
  //appendnew_flow_payment_service_start

  async paymentScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'paymentScript',
      parentSpanInst
    );
    try {
      let userId = bh.input.userId;
      let appointmentId = bh.input.appointmentId;
      let priceInSmallestUnit = bh.input.price * 100;
      const options = {
        amount: priceInSmallestUnit,
        currency: 'INR',
        receipt: bh.input.orderId,
        notes: {
          userId,
          appointmentId,
        },
      };
      bh.local.order = await bh.input.instance.orders.create(options);

      console.log(bh.local.order);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_paymentScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gVU2nlPZ2MbhQIwy',
        spanInst,
        'paymentScript'
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
  //appendnew_flow_payment_service_Catch
}
