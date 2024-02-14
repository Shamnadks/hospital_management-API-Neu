// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_swLoHJcJEoaYFd9j from '../../appointments/filter_specfic/filter_specific_service'; //_splitter_
import * as SSD_SERVICE_ID_sd_FdlVrRt9r82JaAwS from '../../doctors/filter_doctor/filter_doctor_service'; //_splitter_
import * as SSD_SERVICE_ID_sd_er58WUWxKEh6IEiD from '../../users/filter_user/filter_user_service'; //_splitter_
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

  async loop(
    parentSpanInst,
    count = 0,
    appointment_response: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('loop', parentSpanInst);
    let bh: any = {
      input: {
        count,
        appointment_response,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xkHY1BvpFI21VFAo(bh, parentSpanInst);
      //appendnew_next_loop
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
        'sd_prcXQqfQItQJTOas',
        spanInst,
        'loop'
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
      const SSD_SERVICE_ID_sd_swLoHJcJEoaYFd9jInstance: SSD_SERVICE_ID_sd_swLoHJcJEoaYFd9j.filter_specific_service =
        SSD_SERVICE_ID_sd_swLoHJcJEoaYFd9j.filter_specific_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_swLoHJcJEoaYFd9jInstance.filterSpecific(
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
      console.log(bh.local.appointment_response);
      if (bh.local?.appointment_response?.statusCode == 200) {
        bh.local.appointment_response = bh.local.appointment_response?.data;
      } else {
        throw new Error('Some error Occured try again later');
      }
      console.log(bh.local.appointment_response);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2MS0cpOf9pSwLbYK(bh, parentSpanInst);
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

  async sd_2MS0cpOf9pSwLbYK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2MS0cpOf9pSwLbYK',
      parentSpanInst
    );
    try {
      let outputVariables = await this.loop(
        spanInst,
        undefined,
        bh.local.appointment_response
      );
      bh.local.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jIHgvHMx8VHrf6ux(bh, parentSpanInst);
      //appendnew_next_sd_2MS0cpOf9pSwLbYK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2MS0cpOf9pSwLbYK',
        spanInst,
        'sd_2MS0cpOf9pSwLbYK'
      );
    }
  }

  async sd_jIHgvHMx8VHrf6ux(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jIHgvHMx8VHrf6ux',
      parentSpanInst
    );
    try {
      console.log(bh.local.response);
      console.log('bh.local.response');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_jIHgvHMx8VHrf6ux
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jIHgvHMx8VHrf6ux',
        spanInst,
        'sd_jIHgvHMx8VHrf6ux'
      );
    }
  }

  async sd_xkHY1BvpFI21VFAo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xkHY1BvpFI21VFAo',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['gt'](
          bh.input.appointment_response.length,
          bh.input.count,
          undefined,
          undefined
        )
      ) {
        bh = await this.doctoScript(bh, parentSpanInst);
      } else {
        bh = await this.sd_nQHChrsnrwjwxJwN(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xkHY1BvpFI21VFAo',
        spanInst,
        'sd_xkHY1BvpFI21VFAo'
      );
    }
  }

  async doctoScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'doctoScript',
      parentSpanInst
    );
    try {
      bh.input.doctor = {
        id: [bh.input.appointment_response?.[bh.input.count]?.doctor_id],
      };
      console.log(bh.input.doctor);
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
      bh = await this.doctorErrorHandler(bh, parentSpanInst);
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

  async doctorErrorHandler(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'doctorErrorHandler',
      parentSpanInst
    );
    try {
      if (bh.local.doctor_response.statusCode == 200) {
        bh.local.doctor_response = bh.local.doctor_response?.data?.[0];
      } else {
        throw new Error('Some error Occured try again later');
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.userScrip(bh, parentSpanInst);
      //appendnew_next_doctorErrorHandler
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_M3IfIl4c6OUbC4st',
        spanInst,
        'doctorErrorHandler'
      );
    }
  }

  async userScrip(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('userScrip', parentSpanInst);
    try {
      bh.input.user = {
        id: [bh.input.appointment_response?.[bh.input.count]?.user_id],
      };
      console.log(bh.input.user);

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
      const SSD_SERVICE_ID_sd_er58WUWxKEh6IEiDInstance: SSD_SERVICE_ID_sd_er58WUWxKEh6IEiD.filter_user_service =
        SSD_SERVICE_ID_sd_er58WUWxKEh6IEiD.filter_user_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_er58WUWxKEh6IEiDInstance.getAUser(
          spanInst,
          bh.input.user
        );
      bh.local.user_response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.userErrorHandler(bh, parentSpanInst);
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

  async userErrorHandler(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'userErrorHandler',
      parentSpanInst
    );
    try {
      if (bh.local.user_response.statusCode == 200) {
        bh.local.user_response = bh.local.user_response?.data?.[0];
      } else {
        throw new Error('Some error Occured try again later');
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_aYI6HbzDWk959stk(bh, parentSpanInst);
      //appendnew_next_userErrorHandler
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FbBsaqJcEphLsFUk',
        spanInst,
        'userErrorHandler'
      );
    }
  }

  async sd_aYI6HbzDWk959stk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aYI6HbzDWk959stk',
      parentSpanInst
    );
    try {
      Object.assign(bh.input.appointment_response[bh.input.count], {
        doctordetails: bh.local.doctor_response,
      });
      Object.assign(bh.input.appointment_response[bh.input.count], {
        userdetails: bh.local.user_response,
      });
      bh.input.count++;
      bh.local.response = {
        statusCode: 200,
        data: bh.input.appointment_response,
      };
      console.log(bh.input.appointment_response);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OWSP1UQk0C9RaYol(bh, parentSpanInst);
      //appendnew_next_sd_aYI6HbzDWk959stk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aYI6HbzDWk959stk',
        spanInst,
        'sd_aYI6HbzDWk959stk'
      );
    }
  }

  async sd_OWSP1UQk0C9RaYol(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OWSP1UQk0C9RaYol',
      parentSpanInst
    );
    try {
      let outputVariables = await this.loop(
        spanInst,
        bh.input.count,
        bh.input.appointment_response
      );
      bh.local.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_OWSP1UQk0C9RaYol
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OWSP1UQk0C9RaYol',
        spanInst,
        'sd_OWSP1UQk0C9RaYol'
      );
    }
  }

  async sd_nQHChrsnrwjwxJwN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nQHChrsnrwjwxJwN',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        data: bh.input.appointment_response,
      };
      console.log(bh.input.appointment_response);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_nQHChrsnrwjwxJwN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nQHChrsnrwjwxJwN',
        spanInst,
        'sd_nQHChrsnrwjwxJwN'
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
