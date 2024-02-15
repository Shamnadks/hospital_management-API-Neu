// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_Fm1xxqvPxjmjZV2a from '../../appointments/create_appointment/create_appointment_service'; //_splitter_
import * as SSD_SERVICE_ID_sd_swLoHJcJEoaYFd9j from '../../appointments/filter_specfic/filter_specific_service'; //_splitter_
import * as SSD_SERVICE_ID_sd_FdlVrRt9r82JaAwS from '../../doctors/filter_doctor/filter_doctor_service'; //_splitter_
import * as SSD_SERVICE_ID_sd_1utwBDtR9iw7QRXa from '../../users/create_user/create_user_service'; //_splitter_
import * as SSD_SERVICE_ID_sd_er58WUWxKEh6IEiD from '../../users/filter_user/filter_user_service'; //_splitter_
import * as SSD_SERVICE_ID_sd_5uKBgMCMEY9EmeOD from '../payment_req/payment_api'; //_splitter_
//append_imports_end
export class appointment_service {
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
    this.serviceName = 'appointment_service';
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
      instance = new appointment_service(
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
    //appendnew_flow_appointment_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: appointment_service');
    //appendnew_flow_appointment_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: appointment_service');
    //appendnew_flow_appointment_service_HttpIn
  }
  //   service flows_appointment_service

  async createAppointmentFlow(
    parentSpanInst,
    data: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'createAppointmentFlow',
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
      bh = await this.userFinderScript(bh, parentSpanInst);
      //appendnew_next_createAppointmentFlow
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
        'sd_qkPyDTRY2em7dUSR',
        spanInst,
        'createAppointmentFlow'
      );
    }
  }
  //appendnew_flow_appointment_service_start

  async userFinderScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'userFinderScript',
      parentSpanInst
    );
    try {
      bh.input.filterdata = {
        name: [bh.input?.data?.name],
        phone_no: [bh.input?.data?.phone_no],
        dob: [bh.input?.data?.dob],
      };
      console.log(bh.input.filterdata);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.userFinder(bh, parentSpanInst);
      //appendnew_next_userFinderScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zrqZR5wZuM9EEWTE',
        spanInst,
        'userFinderScript'
      );
    }
  }

  async userFinder(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'userFinder',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_er58WUWxKEh6IEiDInstance: SSD_SERVICE_ID_sd_er58WUWxKEh6IEiD.filter_user_service =
        SSD_SERVICE_ID_sd_er58WUWxKEh6IEiD.filter_user_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_er58WUWxKEh6IEiDInstance.getAUser(
          spanInst,
          bh.input.filterdata
        );
      bh.local.user_response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_WBqhvQ6n1fXtslIT(bh, parentSpanInst);
      //appendnew_next_userFinder
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2BVvyyNXnyldcxop',
        spanInst,
        'userFinder'
      );
    }
  }

  async sd_WBqhvQ6n1fXtslIT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WBqhvQ6n1fXtslIT',
      parentSpanInst
    );
    try {
      console.log(bh.local.user_response);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.userDublicateHandler(bh, parentSpanInst);
      //appendnew_next_sd_WBqhvQ6n1fXtslIT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WBqhvQ6n1fXtslIT',
        spanInst,
        'sd_WBqhvQ6n1fXtslIT'
      );
    }
  }

  async userDublicateHandler(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'userDublicateHandler',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.user_response.data.length,
          1,
          undefined,
          undefined
        )
      ) {
        bh = await this.usersErrorHandler(bh, parentSpanInst);
      } else {
        bh = await this.userScript(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wPn4hopPNjxflJcO',
        spanInst,
        'userDublicateHandler'
      );
    }
  }

  async usersErrorHandler(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'usersErrorHandler',
      parentSpanInst
    );
    try {
      if (bh.local.user_response?.statusCode == 200) {
        bh.local.user_response = bh.local.user_response?.data?.[0];
      } else {
        throw new Error('Some error Occured try again later');
      }
      bh.input.status = 'paid';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.dateAndAge(bh, parentSpanInst);
      //appendnew_next_usersErrorHandler
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_O4Prdq6l8VdkfEyS',
        spanInst,
        'usersErrorHandler'
      );
    }
  }

  async dateAndAge(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'dateAndAge',
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
      const dob = new Date(bh.local?.user_response?.dob);
      bh.input.age = year - dob.getFullYear();

      // Check if the birthday hasn't occurred yet this year
      if (
        month < dob.getMonth() ||
        (month === dob.getMonth() && day < dob.getDate())
      ) {
        bh.input.age--;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.tokenFinderScript(bh, parentSpanInst);
      //appendnew_next_dateAndAge
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Wq9YCh3Yn5ajALIp',
        spanInst,
        'dateAndAge'
      );
    }
  }

  async tokenFinderScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'tokenFinderScript',
      parentSpanInst
    );
    try {
      bh.input.filterdata = {
        fields: ['token_number'],
        sorttable: 'token_number',
        sorttype: 'DESC',
        limitdata: 1,
        datas: {
          doctor_id: [bh.input?.data?.doctor_id],
          appointment_date: [bh.input.formattedDate],
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.tokenFinder(bh, parentSpanInst);
      //appendnew_next_tokenFinderScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NvbJXBAxQ7PWlZFo',
        spanInst,
        'tokenFinderScript'
      );
    }
  }

  async tokenFinder(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'tokenFinder',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_swLoHJcJEoaYFd9jInstance: SSD_SERVICE_ID_sd_swLoHJcJEoaYFd9j.filter_specific_service =
        SSD_SERVICE_ID_sd_swLoHJcJEoaYFd9j.filter_specific_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_swLoHJcJEoaYFd9jInstance.filterSpecific(
          spanInst,
          bh.input.filterdata
        );
      bh.local.token = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.tokenErrorHandler(bh, parentSpanInst);
      //appendnew_next_tokenFinder
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eIn2Du6q9UffQloj',
        spanInst,
        'tokenFinder'
      );
    }
  }

  async tokenErrorHandler(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'tokenErrorHandler',
      parentSpanInst
    );
    try {
      if (bh.local.token?.statusCode == 200) {
        bh.local.token = bh.local.token?.data?.[0]?.token_number || 0;
      } else {
        throw new Error('Some error Occured try again later');
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.doctorScript(bh, parentSpanInst);
      //appendnew_next_tokenErrorHandler
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rSJjxCm3xlsgnV3O',
        spanInst,
        'tokenErrorHandler'
      );
    }
  }

  async doctorScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'doctorScript',
      parentSpanInst
    );
    try {
      bh.input.doctor = { id: [bh.input?.data?.doctor_id] };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.doctorFlow(bh, parentSpanInst);
      //appendnew_next_doctorScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tAQhvM7nzB5EbueV',
        spanInst,
        'doctorScript'
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
        'sd_zGDGZFelERRd0H7I',
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
      if (bh.local.doctor_response?.statusCode == 200) {
        bh.local.doctor_response = bh.local.doctor_response?.data?.[0];
      } else {
        throw new Error('Some error Occured try again later');
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.errorTokenLimit(bh, parentSpanInst);
      //appendnew_next_doctorErrorHandler
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WY01PFLnaJqS39rG',
        spanInst,
        'doctorErrorHandler'
      );
    }
  }

  async errorTokenLimit(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'errorTokenLimit',
      parentSpanInst
    );
    try {
      if (bh.local?.doctor_response?.token_limit < bh.local.token + 1) {
        throw new Error('Token Limit Exceed');
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.appointment(bh, parentSpanInst);
      //appendnew_next_errorTokenLimit
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6Q5R0am0hoJaY6U1',
        spanInst,
        'errorTokenLimit'
      );
    }
  }

  async appointment(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'appointment',
      parentSpanInst
    );
    try {
      bh.local.appointment = {
        id: 0,
        user_id: bh.local?.user_response?.id,
        doctor_id: bh.input?.data?.doctor_id,
        appointment_date: bh.input.formattedDate,
        token_number: bh.local.token + 1,
        cash: bh.input?.data?.cash,
        age: bh.input.age,
        status: bh.input.status,
      };
      // console.log(bh.local.appointment)
      this.tracerService.sendData(spanInst, bh);
      bh = await this.appoinmentFlow(bh, parentSpanInst);
      //appendnew_next_appointment
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AVbrERh80Wtu5zGR',
        spanInst,
        'appointment'
      );
    }
  }

  async appoinmentFlow(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'appoinmentFlow',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_Fm1xxqvPxjmjZV2aInstance: SSD_SERVICE_ID_sd_Fm1xxqvPxjmjZV2a.create_appointment_service =
        SSD_SERVICE_ID_sd_Fm1xxqvPxjmjZV2a.create_appointment_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_Fm1xxqvPxjmjZV2aInstance.createAppointmentFlow(
          spanInst,
          bh.local.appointment
        );
      bh.local.resultdata = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.appointmentErrorHandler(bh, parentSpanInst);
      //appendnew_next_appoinmentFlow
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zyqekgl9w1v4079g',
        spanInst,
        'appoinmentFlow'
      );
    }
  }

  async appointmentErrorHandler(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'appointmentErrorHandler',
      parentSpanInst
    );
    try {
      if (bh.local.resultdata?.statusCode == 200) {
        bh.local.resultdata = bh.local.resultdata?.data;
      } else {
        throw new Error('Some error Occured try again later');
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.paymentData(bh, parentSpanInst);
      //appendnew_next_appointmentErrorHandler
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NZnQKeQzIIQlJaPI',
        spanInst,
        'appointmentErrorHandler'
      );
    }
  }

  async paymentData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'paymentData',
      parentSpanInst
    );
    try {
      bh.local.paymentdata = {
        appointment_id: bh.local.resultdata?.id,
        user_id: bh.local.resultdata?.user_id,
        doctor_id: bh.local.resultdata?.doctor_id,
        payment_method: bh.input.data?.payment_method,
        cash: bh.local.resultdata?.cash,
        status: bh.input.status,
        sucess_url: bh.input.data?.sucess_url,
        cancel_url: bh.input.data?.cancel_url,
      };
      console.log(bh.local.paymentdata);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6oaugOlUcCsbWqNI(bh, parentSpanInst);
      //appendnew_next_paymentData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lPeuyHWnwoNO2Mr8',
        spanInst,
        'paymentData'
      );
    }
  }

  async sd_6oaugOlUcCsbWqNI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6oaugOlUcCsbWqNI',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_5uKBgMCMEY9EmeODInstance: SSD_SERVICE_ID_sd_5uKBgMCMEY9EmeOD.payment_api =
        SSD_SERVICE_ID_sd_5uKBgMCMEY9EmeOD.payment_api.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_5uKBgMCMEY9EmeODInstance.paymentStart(
          spanInst,
          bh.local.paymentdata
        );
      bh.local.paymentresponse = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.paymentErrorHandler(bh, parentSpanInst);
      //appendnew_next_sd_6oaugOlUcCsbWqNI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6oaugOlUcCsbWqNI',
        spanInst,
        'sd_6oaugOlUcCsbWqNI'
      );
    }
  }

  async paymentErrorHandler(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'paymentErrorHandler',
      parentSpanInst
    );
    try {
      console.log(bh.local.paymentresponse);
      if (bh.local.paymentresponse?.statusCode == 200) {
        bh.local.paymentresponse = bh.local.paymentresponse?.data;
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
        'sd_iOB5bY8BAZWXDLpv',
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
        data: {
          data: bh.local.resultdata,
          url: bh.local.paymentresponse,
        },
      };
      console.log(bh.local.response);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_statusReport
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4TXnC8G2GW745azM',
        spanInst,
        'statusReport'
      );
    }
  }

  async userScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'userScript',
      parentSpanInst
    );
    try {
      bh.local.users = {
        id: 0,
        name: bh.input?.data?.name,
        phone_no: bh.input?.data?.phone_no,
        dob: bh.input?.data?.dob,
        place: bh.input?.data?.place,
        address: bh.input?.data?.address,
        pin_code: bh.input?.data?.pin_code,
        email: bh.input?.data?.email,
        blood_group: bh.input?.data?.blood_group,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.createUserFlow(bh, parentSpanInst);
      //appendnew_next_userScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OqW1iGu1zHMxnYkq',
        spanInst,
        'userScript'
      );
    }
  }

  async createUserFlow(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createUserFlow',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1utwBDtR9iw7QRXaInstance: SSD_SERVICE_ID_sd_1utwBDtR9iw7QRXa.create_user_service =
        SSD_SERVICE_ID_sd_1utwBDtR9iw7QRXa.create_user_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1utwBDtR9iw7QRXaInstance.createUserFlow(
          spanInst,
          bh.local.users
        );
      bh.local.user_response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.userErrorHandler(bh, parentSpanInst);
      //appendnew_next_createUserFlow
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1lhDY9ucbweZ5nGv',
        spanInst,
        'createUserFlow'
      );
    }
  }

  async userErrorHandler(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'userErrorHandler',
      parentSpanInst
    );
    try {
      if (bh.local.user_response?.statusCode == 200) {
        bh.local.user_response = bh.local.user_response?.data;
      } else {
        throw new Error('Some error Occured try again later');
      }
      bh.input.status = 'pending';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.dateAndAge(bh, parentSpanInst);
      //appendnew_next_userErrorHandler
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_83rrv4qrlNpagft5',
        spanInst,
        'userErrorHandler'
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
  //appendnew_flow_appointment_service_Catch
}
