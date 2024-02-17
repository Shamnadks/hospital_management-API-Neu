// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkB from '../../filter/filterservice'; //_splitter_
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
      bh = await this.sd_87AEBGnFzWoCPGMl(bh, parentSpanInst);
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

  async sd_87AEBGnFzWoCPGMl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_87AEBGnFzWoCPGMl',
      parentSpanInst
    );
    try {
      bh.input.filterdata = {
        tablename: 'appointments',
        ...bh.input.data,
      };
      console.log(bh.input.data);
      console.log(bh.input.filterdata);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.appointmentFilter(bh, parentSpanInst);
      //appendnew_next_sd_87AEBGnFzWoCPGMl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_87AEBGnFzWoCPGMl',
        spanInst,
        'sd_87AEBGnFzWoCPGMl'
      );
    }
  }

  async appointmentFilter(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'appointmentFilter',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkBInstance: SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkB.filterservice =
        SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkB.filterservice.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkBInstance.filterSpecific(
          spanInst,
          bh.input.filterdata
        );
      bh.local.appointment_response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.appointmentErrorHandler(bh, parentSpanInst);
      //appendnew_next_appointmentFilter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5qprqxDDgqn12YnT',
        spanInst,
        'appointmentFilter'
      );
    }
  }

  async appointmentErrorHandler(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'appointmentErrorHandler',
      parentSpanInst
    );
    try {
      if (bh.local?.appointment_response?.statusCode == 200) {
        bh.local.appointment_response = bh.local.appointment_response?.data;
      } else {
        throw new Error('Some error Occured try again later');
      }
      console.log(bh.local.appointment_response);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.looping(bh, parentSpanInst);
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

  async looping(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('looping', parentSpanInst);
    try {
      let outputVariables = await this.loop(
        spanInst,
        undefined,
        bh.local.appointment_response
      );
      bh.local.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.response(bh, parentSpanInst);
      //appendnew_next_looping
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2MS0cpOf9pSwLbYK',
        spanInst,
        'looping'
      );
    }
  }

  async response(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('response', parentSpanInst);
    try {
      console.log(bh.local.response);
      console.log('bh.local.response');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_response
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jIHgvHMx8VHrf6ux',
        spanInst,
        'response'
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
      bh.input.filterdata = {
        tablename: 'doctors',
        columns: [
          `${process.env.DB_SCHEMA}.doctors.*, (SELECT name FROM ${process.env.DB_SCHEMA}.department WHERE id = doctors.department_id) AS department_name`,
        ],
        datas: {
          id: [bh.input.appointment_response?.[bh.input.count]?.doctor_id],
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.doctorFilter(bh, parentSpanInst);
      //appendnew_next_doctoScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6XECdMWEQC6LVXAk',
        spanInst,
        'doctoScript'
      );
    }
  }

  async doctorFilter(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'doctorFilter',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkBInstance: SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkB.filterservice =
        SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkB.filterservice.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkBInstance.filterSpecific(
          spanInst,
          bh.input.filterdata
        );
      bh.local.doctor_response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.doctorErrorHandler(bh, parentSpanInst);
      //appendnew_next_doctorFilter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YRGtP4EA2FSQ8kXW',
        spanInst,
        'doctorFilter'
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
      console.log(bh.local.doctor_response);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.userFinderScript(bh, parentSpanInst);
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

  async userFinderScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'userFinderScript',
      parentSpanInst
    );
    try {
      bh.input.filterdata = {
        tablename: 'users',
        datas: {
          id: [bh.input.appointment_response?.[bh.input.count]?.user_id],
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.userFilter(bh, parentSpanInst);
      //appendnew_next_userFinderScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JOhJaV506A9wlvzb',
        spanInst,
        'userFinderScript'
      );
    }
  }

  async userFilter(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'userFilter',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkBInstance: SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkB.filterservice =
        SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkB.filterservice.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkBInstance.filterSpecific(
          spanInst,
          bh.input.filterdata
        );
      bh.local.user_response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.userErrorHandler(bh, parentSpanInst);
      //appendnew_next_userFilter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DQxfkQIFgVmHcO2Z',
        spanInst,
        'userFilter'
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
        'sd_WAHr1wn4neXtvjXq',
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
    const catchConnectedNodes = ['sd_WAHr1wn4neXtvjXq'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.statusErrorReport(bh, parentSpanInst);
    //appendnew_next_errorHandle
    return true;
  }
  //appendnew_flow_get_appointment_flow_Catch
}
