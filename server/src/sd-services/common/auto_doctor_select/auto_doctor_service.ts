// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_swLoHJcJEoaYFd9j from '../../appointments/filter_specfic/filter_specific_service'; //_splitter_
import * as SSD_SERVICE_ID_sd_FdlVrRt9r82JaAwS from '../../doctors/filter_doctor/filter_doctor_service'; //_splitter_
import * as SSD_SERVICE_ID_sd_r0H8vsrn1p2lt1Ok from '../get_appointments/get_appointment_flow'; //_splitter_
//append_imports_end
export class auto_doctor_service {
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
    this.serviceName = 'auto_doctor_service';
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
      instance = new auto_doctor_service(
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
    //appendnew_flow_auto_doctor_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: auto_doctor_service');
    //appendnew_flow_auto_doctor_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: auto_doctor_service');
    //appendnew_flow_auto_doctor_service_HttpIn
  }
  //   service flows_auto_doctor_service

  async autoDoctorFlow(parentSpanInst, data: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'autoDoctorFlow',
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
      bh = await this.sd_DeX9oH4ATtf4bHLu(bh, parentSpanInst);
      //appendnew_next_autoDoctorFlow
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
        'sd_uqFwMxCwDJ5tDqx3',
        spanInst,
        'autoDoctorFlow'
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
      bh = await this.sd_kKsCxNDwbjGO2EN8(bh, parentSpanInst);
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
        'sd_SV5ZrnEwPUuV5qfr',
        spanInst,
        'loop'
      );
    }
  }

  async autoDoctorSelect(parentSpanInst, data: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'autoDoctorSelect',
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
      bh = await this.doctoScript(bh, parentSpanInst);
      //appendnew_next_autoDoctorSelect
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
        'sd_otLhY4aMkMQD0RvJ',
        spanInst,
        'autoDoctorSelect'
      );
    }
  }
  //appendnew_flow_auto_doctor_service_start

  async sd_DeX9oH4ATtf4bHLu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DeX9oH4ATtf4bHLu',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_r0H8vsrn1p2lt1OkInstance: SSD_SERVICE_ID_sd_r0H8vsrn1p2lt1Ok.get_appointment_flow =
        SSD_SERVICE_ID_sd_r0H8vsrn1p2lt1Ok.get_appointment_flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_r0H8vsrn1p2lt1OkInstance.loop(
          spanInst,
          undefined,
          bh.local.appointment_response
        );
      bh.local.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gfIE8YRpTJl5WRjy(bh, parentSpanInst);
      //appendnew_next_sd_DeX9oH4ATtf4bHLu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DeX9oH4ATtf4bHLu',
        spanInst,
        'sd_DeX9oH4ATtf4bHLu'
      );
    }
  }

  async sd_gfIE8YRpTJl5WRjy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gfIE8YRpTJl5WRjy',
      parentSpanInst
    );
    try {
      console.log(bh.local.response);
      console.log('bh.local.response');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_gfIE8YRpTJl5WRjy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gfIE8YRpTJl5WRjy',
        spanInst,
        'sd_gfIE8YRpTJl5WRjy'
      );
    }
  }

  async sd_kKsCxNDwbjGO2EN8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kKsCxNDwbjGO2EN8',
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
      } else {
        bh = await this.sd_QGGIaYdO6efbz6O2(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kKsCxNDwbjGO2EN8',
        spanInst,
        'sd_kKsCxNDwbjGO2EN8'
      );
    }
  }

  async sd_QGGIaYdO6efbz6O2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QGGIaYdO6efbz6O2',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        data: bh.input.appointment_response,
      };
      console.log(bh.input.appointment_response);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_QGGIaYdO6efbz6O2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QGGIaYdO6efbz6O2',
        spanInst,
        'sd_QGGIaYdO6efbz6O2'
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
        'sd_f1gxTwkXDtPVOmf9',
        spanInst,
        'statusErrorReport'
      );
    }
  }

  async doctoScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'doctoScript',
      parentSpanInst
    );
    try {
      bh.input.doctor = { department_id: [bh.input.data] };
      console.log(bh.input.doctor);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.doctorFlow(bh, parentSpanInst);
      //appendnew_next_doctoScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QecKCLxPLKHEipWF',
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
        'sd_d5UnEr9GfEY9f67J',
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
        bh.local.doctor_response = bh.local.doctor_response?.data;
      } else {
        throw new Error('Some error Occured try again later');
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3IpfcYH11kNvA2La(bh, parentSpanInst);
      //appendnew_next_doctorErrorHandler
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bmZgo3ZmXEJsschR',
        spanInst,
        'doctorErrorHandler'
      );
    }
  }

  async sd_3IpfcYH11kNvA2La(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3IpfcYH11kNvA2La',
      parentSpanInst
    );
    try {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1; // Month is zero-based, so add 1
      const day = currentDate.getDate();
      bh.input.formattedDate = `${year}-${month < 10 ? '0' + month : month}-${
        day < 10 ? '0' + day : day
      }`;
      console.log(bh.local?.doctor_response);
      let idArray = bh.local?.doctor_response?.map((doc) => doc.id);
      console.log(idArray);
      bh.input.appoinmentfilter = {
        columns: ['doctor_id', 'MAX(token_number) as max_token'],
        datas: {
          appointment_date: ['2024-02-15'],
          doctor_id: idArray,
        },
        groupby: ['doctor_id'],
      };
      console.log(bh.input.appoinmentfilter);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getAutoData(bh, parentSpanInst);
      //appendnew_next_sd_3IpfcYH11kNvA2La
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3IpfcYH11kNvA2La',
        spanInst,
        'sd_3IpfcYH11kNvA2La'
      );
    }
  }

  async getAutoData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getAutoData',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_swLoHJcJEoaYFd9jInstance: SSD_SERVICE_ID_sd_swLoHJcJEoaYFd9j.filter_specific_service =
        SSD_SERVICE_ID_sd_swLoHJcJEoaYFd9j.filter_specific_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_swLoHJcJEoaYFd9jInstance.filterSpecific(
          spanInst,
          bh.input.appoinmentfilter
        );
      bh.local.appointment_response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.appointmentErrorHandler(bh, parentSpanInst);
      //appendnew_next_getAutoData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_M9Hf5Mj34D1cAB3E',
        spanInst,
        'getAutoData'
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

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_a1z6MZMvU9kRrMNR(bh, parentSpanInst);
      //appendnew_next_appointmentErrorHandler
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GBFamdBUYVdVXsiA',
        spanInst,
        'appointmentErrorHandler'
      );
    }
  }

  async sd_a1z6MZMvU9kRrMNR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a1z6MZMvU9kRrMNR',
      parentSpanInst
    );
    try {
      let results = [];
      let topBalanceToken = Number.MIN_SAFE_INTEGER;
      let topDoctor = {};
      for (let i = 0; i < bh.local.doctor_response.length; i++) {
        let doctorItem = bh.local.doctor_response[i];
        let appointmentItem = bh.local.appointment_response.find(
          (app) => app.doctor_id === doctorItem.id
        );
        if (appointmentItem) {
          let balanceToken = doctorItem.token_limit - appointmentItem.max_token;
          results.push({
            id: doctorItem.id,
            balanceToken: balanceToken,
            ...doctorItem,
          });
          if (balanceToken > topBalanceToken) {
            topBalanceToken = balanceToken;
            topDoctor = {
              id: doctorItem.id,
              balanceToken: balanceToken,
              ...doctorItem,
            };
          }
        }
      }
      bh.local.response = {
        statusCode: 200,
        data: results,
        selcted: topDoctor,
      };
      console.log(bh.local.response);

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_a1z6MZMvU9kRrMNR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a1z6MZMvU9kRrMNR',
        spanInst,
        'sd_a1z6MZMvU9kRrMNR'
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
    const catchConnectedNodes = ['sd_f1gxTwkXDtPVOmf9'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.statusErrorReport(bh, parentSpanInst);
    //appendnew_next_errorHandle
    return true;
  }
  //appendnew_flow_auto_doctor_service_Catch
}
