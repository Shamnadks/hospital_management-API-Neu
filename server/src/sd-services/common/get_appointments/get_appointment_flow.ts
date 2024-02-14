// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_lRLqUDOgTWLPHbfo from '../../appointments/filter_appointment/appointments_filter_service'; //_splitter_
import * as SSD_SERVICE_ID_sd_FdlVrRt9r82JaAwS from '../../doctors/filter_doctor/filter_doctor_service'; //_splitter_
//append_imports_end
export class get_appointment_flow {
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
    this.serviceName = 'get_appointment_flow';
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
      instance = new get_appointment_flow(
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
    //appendnew_flow_get_appointment_flow_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: get_appointment_flow');
    //appendnew_flow_get_appointment_flow_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: get_appointment_flow');
    //appendnew_flow_get_appointment_flow_HttpIn
  }
  //   service flows_get_appointment_flow

  async getAppointmentFlow(parentSpanInst, data: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getAppointmentFlow',
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
      bh = await this.sd_OBkekWCNAPRrws2O(bh, parentSpanInst);
      //appendnew_next_getAppointmentFlow
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
        'sd_yxCIS4I0s8cOYMlp',
        spanInst,
        'getAppointmentFlow'
      );
    }
  }
  //appendnew_flow_get_appointment_flow_start

  async sd_OBkekWCNAPRrws2O(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OBkekWCNAPRrws2O',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_lRLqUDOgTWLPHbfoInstance: SSD_SERVICE_ID_sd_lRLqUDOgTWLPHbfo.appointments_filter_service =
        SSD_SERVICE_ID_sd_lRLqUDOgTWLPHbfo.appointments_filter_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_lRLqUDOgTWLPHbfoInstance.getAAppointments(
          spanInst,
          bh.input.data
        );
      bh.local.appointment_response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.appointmentErrorHandler(bh, parentSpanInst);
      //appendnew_next_sd_OBkekWCNAPRrws2O
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OBkekWCNAPRrws2O',
        spanInst,
        'sd_OBkekWCNAPRrws2O'
      );
    }
  }

  async appointmentErrorHandler(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'appointmentErrorHandler',
      parentSpanInst
    );
    try {
      if (bh.local.doctor_response.statusCode == 200) {
        bh.local.appointment_response =
          bh.local.appointment_response?.data?.[0];
      } else {
        throw new Error('Some error Occured try again later');
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.doctoScript(bh, parentSpanInst);
      //appendnew_next_appointmentErrorHandler
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XQjlPNnfq9rXrmpz',
        spanInst,
        'appointmentErrorHandler'
      );
    }
  }

  async doctoScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'doctoScript',
      parentSpanInst
    );
    try {
      bh.input.doctor = { id: [bh.local.appointment_response?.doctor_id] };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.doctorFlow(bh, parentSpanInst);
      //appendnew_next_doctoScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vnhSXb6eNc2IKpAt',
        spanInst,
        'doctoScript'
      );
    }
  }

  async doctorFlow(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'doctorFlow',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_FdlVrRt9r82JaAwSInstance: SSD_SERVICE_ID_sd_FdlVrRt9r82JaAwS.filter_doctor_service =
        SSD_SERVICE_ID_sd_FdlVrRt9r82JaAwS.filter_doctor_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_FdlVrRt9r82JaAwSInstance.getADoctor(
          spanInst,
          bh.input.doctor
        );
      bh.local.doctor_response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.userScrip(bh, parentSpanInst);
      //appendnew_next_doctorFlow
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ca3pZvBga2AEYLXx',
        spanInst,
        'doctorFlow'
      );
    }
  }

  async userScrip(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('userScrip', parentSpanInst);
    try {
      bh.input.user = { id: [bh.input?.data?.user_id] };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.userFlow(bh, parentSpanInst);
      //appendnew_next_userScrip
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_840tHLvYcyik9wZs',
        spanInst,
        'userScrip'
      );
    }
  }

  async userFlow(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('userFlow', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_FdlVrRt9r82JaAwSInstance: SSD_SERVICE_ID_sd_FdlVrRt9r82JaAwS.filter_doctor_service =
        SSD_SERVICE_ID_sd_FdlVrRt9r82JaAwS.filter_doctor_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_FdlVrRt9r82JaAwSInstance.getADoctor(
          spanInst,
          bh.input.doctor
        );
      bh.local.doctor_response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.paymentScript(bh, parentSpanInst);
      //appendnew_next_userFlow
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PHWJqt75fbLJCnpi',
        spanInst,
        'userFlow'
      );
    }
  }

  async paymentScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'paymentScript',
      parentSpanInst
    );
    try {
      bh.input.doctor = { id: [bh.input?.data?.payment_id] };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.paymentFlow(bh, parentSpanInst);
      //appendnew_next_paymentScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rpTYE9YEeLLnSGMe',
        spanInst,
        'paymentScript'
      );
    }
  }

  async paymentFlow(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'paymentFlow',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_FdlVrRt9r82JaAwSInstance: SSD_SERVICE_ID_sd_FdlVrRt9r82JaAwS.filter_doctor_service =
        SSD_SERVICE_ID_sd_FdlVrRt9r82JaAwS.filter_doctor_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_FdlVrRt9r82JaAwSInstance.getADoctor(
          spanInst,
          bh.input.doctor
        );
      bh.local.doctor_response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_paymentFlow
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rHRVE5mwPKEN9jgu',
        spanInst,
        'paymentFlow'
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
  //appendnew_flow_get_appointment_flow_Catch
}
