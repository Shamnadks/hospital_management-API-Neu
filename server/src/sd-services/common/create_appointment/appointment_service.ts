// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
import * as SSD_SERVICE_ID_sd_Fm1xxqvPxjmjZV2a from '../../appointments/create_appointment/create_appointment_service'; //_splitter_
import * as SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkB from '../../filter/filterservice'; //_splitter_
import * as SSD_SERVICE_ID_sd_sebhAvpyjJHu1R1Z from '../../pdf/upload_service'; //_splitter_
import * as SSD_SERVICE_ID_sd_1utwBDtR9iw7QRXa from '../../users/create_user/create_user_service'; //_splitter_
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
      bh = await this.sd_ub2HTobvKknrOkkB(bh, parentSpanInst);
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

  async appointmentFetch(parentSpanInst, data: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'appointmentFetch',
      parentSpanInst
    );
    let bh: any = {
      input: {
        data,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.handleMain(bh, parentSpanInst);
      //appendnew_next_appointmentFetch
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MWcGSkxK6E1H5XuI',
        spanInst,
        'appointmentFetch'
      );
    }
  }
  //appendnew_flow_appointment_service_start

  async sd_ub2HTobvKknrOkkB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ub2HTobvKknrOkkB',
      parentSpanInst
    );
    try {
      let outputVariables = await this.appointmentFetch(
        spanInst,
        bh.input.data
      );
      bh.local.slaDate = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yNNcL6dmd2RYNDWe(bh, parentSpanInst);
      //appendnew_next_sd_ub2HTobvKknrOkkB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ub2HTobvKknrOkkB',
        spanInst,
        'sd_ub2HTobvKknrOkkB'
      );
    }
  }

  async sd_yNNcL6dmd2RYNDWe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yNNcL6dmd2RYNDWe',
      parentSpanInst
    );
    try {
      console.log(bh.input.data, 'serrrr');

      this.tracerService.sendData(spanInst, bh);
      bh = await this.userFinderScript(bh, parentSpanInst);
      //appendnew_next_sd_yNNcL6dmd2RYNDWe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yNNcL6dmd2RYNDWe',
        spanInst,
        'sd_yNNcL6dmd2RYNDWe'
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
          name: [bh.input?.data?.name],
          phone_no: [bh.input?.data?.phone_no],
          dob: [bh.input?.data?.dob],
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
        'sd_zrqZR5wZuM9EEWTE',
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
      bh = await this.userDublicateHandler(bh, parentSpanInst);
      //appendnew_next_userFilter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8Exr912Zqy29uxvJ',
        spanInst,
        'userFilter'
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
        this.sdService.operators['gte'](
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
        tablename: 'appointments',
        columns: ['MAX(token_number) as token_number'],
        datas: {
          doctor_id: [bh.input?.data?.doctor_id],
          appointment_date: [bh.input.formattedDate],
        },
        groupby: ['doctor_id'],
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.appointmentTokenFilter(bh, parentSpanInst);
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

  async appointmentTokenFilter(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'appointmentTokenFilter',
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
      bh.local.token = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.tokenErrorHandler(bh, parentSpanInst);
      //appendnew_next_appointmentTokenFilter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OWspeXKLxlzgBAYN',
        spanInst,
        'appointmentTokenFilter'
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
      console.log(bh.local.token);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.doctoScript(bh, parentSpanInst);
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
          id: [bh.input.data?.doctor_id],
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
        'sd_50OcWwyndouCjK7H',
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
        'sd_lijNWtD0R1mGyp8d',
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
      bh = await this.fileUpload(bh, parentSpanInst);
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

  async fileUpload(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'fileUpload',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_sebhAvpyjJHu1R1ZInstance: SSD_SERVICE_ID_sd_sebhAvpyjJHu1R1Z.upload_service =
        SSD_SERVICE_ID_sd_sebhAvpyjJHu1R1Z.upload_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_sebhAvpyjJHu1R1ZInstance.fileUploadUsingCloudinary(
          spanInst,
          bh.input.data.newFile
        );
      bh.local.uploaddata = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.appointment(bh, parentSpanInst);
      //appendnew_next_fileUpload
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3qF86QE90JO9OGPH',
        spanInst,
        'fileUpload'
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
        url: bh.local?.uploaddata?.data?.url,
        status: bh.input.status,
        sla: bh.input.data.sla,
        sla_date: bh.local?.slaDate?.slaEndDate,
      };
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
      this.tracerService.sendData(spanInst, bh);
      bh = await this.paymentService(bh, parentSpanInst);
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

  async paymentService(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'paymentService',
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
      //appendnew_next_paymentService
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6oaugOlUcCsbWqNI',
        spanInst,
        'paymentService'
      );
    }
  }

  async paymentErrorHandler(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'paymentErrorHandler',
      parentSpanInst
    );
    try {
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
      // console.log(bh.local.response)
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

  async handleMain(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'handleMain',
      parentSpanInst
    );
    try {
      console.log(bh.input.data.sla, 'appointment data');
      const sla_end_date = new Date();
      const current_date = new Date();

      console.log(sla_end_date, 'dateeeeeeeeeeeeeeeeeeeeeeeeee');
      sla_end_date.setDate(sla_end_date.getDate() + Number(bh.input.data.sla));

      console.log(sla_end_date, 'slaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

      bh.local.holidayFilterQuery = `SELECT *
FROM ${process.env.DB_SCHEMA}.holidays
WHERE starting_date > $1;
`;
      bh.local.holidayFilterQueryParams = [current_date];

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8Xl230whNHogyHin(bh, parentSpanInst);
      //appendnew_next_handleMain
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2bqBS1IoF0aK5AfG',
        spanInst,
        'handleMain'
      );
    }
  }

  async sd_8Xl230whNHogyHin(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8Xl230whNHogyHin',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_JFEzq9BaWr7Csm3t'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.local.holidayFilterQueryParams;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.holidayFilterQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.extendedDays(bh, parentSpanInst);
      //appendnew_next_sd_8Xl230whNHogyHin
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8Xl230whNHogyHin',
        spanInst,
        'sd_8Xl230whNHogyHin'
      );
    }
  }

  async extendedDays(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'extendedDays',
      parentSpanInst
    );
    try {
      // console.log(bh.local.result,"holiday")

      const holidays = bh.local?.result;

      function daysBetween(startDate, endDate) {
        const oneDay = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs((startDate - endDate) / oneDay));
      }

      const slaStartDate = new Date();
      const slaEndDate = new Date();
      slaEndDate.setDate(slaStartDate.getDate() + Number(bh.input.data.sla));

      let holidayDays = 0;
      for (const holiday of holidays) {
        const asianStartDate = new Date(holiday.starting_date);
        asianStartDate.setMinutes(
          asianStartDate.getMinutes() + asianStartDate.getTimezoneOffset()
        );
        const holidayStartDate = new Date(
          asianStartDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
        );
        if (slaEndDate < holidayStartDate) {
          continue;
        }
        console.log(holidayStartDate, 'holidayStartDate');
        const asianEndDate = new Date(holiday.end_date);
        asianEndDate.setMinutes(
          asianEndDate.getMinutes() + asianEndDate.getTimezoneOffset()
        );

        const holidayEndDate = new Date(
          asianEndDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
        );
        console.log(holidayEndDate, 'holidayEndDate');

        holidayDays = daysBetween(holidayStartDate, holidayEndDate) + 1;
        slaEndDate.setDate(slaEndDate.getDate() + Number(holidayDays));
        console.log(holidayDays, 'holidayDays');
      }

      console.log('Extended end date:', slaEndDate);

      bh.local.result = {
        slaEndDate: slaEndDate,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_extendedDays
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mHmNplxHPL3B56Uf',
        spanInst,
        'extendedDays'
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
