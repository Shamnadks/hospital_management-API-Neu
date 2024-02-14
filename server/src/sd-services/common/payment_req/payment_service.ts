// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_WDoX05PyLP0zXvOd from '../../payment/create_payment/create_payment_service'; //_splitter_
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
    instance: any = undefined,
    data: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'generateRazorPayOrder',
      parentSpanInst
    );
    let bh: any = {
      input: {
        instance,
        data,
      },
      local: {
        response: undefined,
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
            response: bh.local.response,
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
      let userId = bh.input?.data?.user_id;
      let appointmentId = '' + bh.input?.data?.appointment_id;
      let priceInSmallestUnit = bh.input?.data?.cash;
      console.log(bh.input?.data?.sucess_url, bh.input?.data?.cancel_url);
      const session = await bh.input.instance.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'INR',
              product_data: {
                name: `AppointmentID:${bh.input?.data?.appointment_id}`,
              },
              unit_amount: priceInSmallestUnit,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: bh.input?.data?.sucess_url,
        cancel_url: bh.input?.data?.cancel_url,
      });

      bh.local.sessionid = session.id;
      bh.local.url = session.url;
      // console.log(session)
      this.tracerService.sendData(spanInst, bh);
      bh = await this.data(bh, parentSpanInst);
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

  async data(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('data', parentSpanInst);
    try {
      bh.input.payment_details = {
        id: 0,
        appointment_id: bh.input?.data?.appointment_id,
        user_id: bh.input?.data?.user_id,
        doctor_id: bh.input?.data?.doctor_id,
        payment_method: bh.input?.data?.payment_method,
        payment_id: bh.local.sessionid,
        cash: bh.input?.data?.cash,
        status: bh.input?.data?.status,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nf6yjEotv1s2ZKEA(bh, parentSpanInst);
      //appendnew_next_data
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XwAsc4zK3lL4iaNa',
        spanInst,
        'data'
      );
    }
  }

  async sd_nf6yjEotv1s2ZKEA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nf6yjEotv1s2ZKEA',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_WDoX05PyLP0zXvOdInstance: SSD_SERVICE_ID_sd_WDoX05PyLP0zXvOd.create_payment_service =
        SSD_SERVICE_ID_sd_WDoX05PyLP0zXvOd.create_payment_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_WDoX05PyLP0zXvOdInstance.createPaymentFlow(
          spanInst,
          bh.input.payment_details
        );
      bh.local.payment_response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.paymentErrorHandler(bh, parentSpanInst);
      //appendnew_next_sd_nf6yjEotv1s2ZKEA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nf6yjEotv1s2ZKEA',
        spanInst,
        'sd_nf6yjEotv1s2ZKEA'
      );
    }
  }

  async paymentErrorHandler(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'paymentErrorHandler',
      parentSpanInst
    );
    try {
      if (bh.local.payment_response.statusCode == 200) {
        bh.local.payment_response = bh.local.payment_response?.data;
      } else {
        throw new Error('Some error Occured try again later');
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.statusReport(bh, parentSpanInst);
      //appendnew_next_paymentErrorHandler
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0yOf4irIUnAvZD5Q',
        spanInst,
        'paymentErrorHandler'
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
        data: bh.local.url,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_statusReport
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tH30MdFBem0EqASM',
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
  //appendnew_flow_payment_service_Catch
}
