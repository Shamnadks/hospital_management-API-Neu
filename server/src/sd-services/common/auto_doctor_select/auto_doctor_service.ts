// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkB from '../../filter/filterservice'; //_splitter_
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
      bh.input.filterdata = {
        tablename: 'doctors',
        columns: [
          `${process.env.DB_SCHEMA}.doctors.*, (SELECT name FROM ${process.env.DB_SCHEMA}.department WHERE id = doctors.department_id) AS department_name`,
        ],
        datas: {
          department_id: [bh.input.data],
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
        'sd_QecKCLxPLKHEipWF',
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
      bh = await this.sd_DhVyCYWHgkPpCUYX(bh, parentSpanInst);
      //appendnew_next_doctorFilter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lv5TdXG2PfceJn8T',
        spanInst,
        'doctorFilter'
      );
    }
  }

  async sd_DhVyCYWHgkPpCUYX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DhVyCYWHgkPpCUYX',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['gt'](
          bh.local.doctor_response.data.length,
          0,
          undefined,
          undefined
        )
      ) {
        bh = await this.doctorErrorHandler(bh, parentSpanInst);
      } else {
        bh = await this.doctorErrorResponse(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DhVyCYWHgkPpCUYX',
        spanInst,
        'sd_DhVyCYWHgkPpCUYX'
      );
    }
  }

  async doctorErrorResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'doctorErrorResponse',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        data: [],
        selcted: {},
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_doctorErrorResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bmZgo3ZmXEJsschR',
        spanInst,
        'doctorErrorResponse'
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
      bh = await this.timeFinderFilter(bh, parentSpanInst);
      //appendnew_next_doctorErrorHandler
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ku4npc4boInEB59R',
        spanInst,
        'doctorErrorHandler'
      );
    }
  }

  async timeFinderFilter(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'timeFinderFilter',
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
      let idArray = bh.local?.doctor_response?.map((doc) => doc.id);
      bh.input.appoinmentfilter = {
        tablename: 'appointments',
        columns: ['doctor_id', 'MAX(token_number) as max_token'],
        datas: {
          appointment_date: [bh.input.formattedDate],
          doctor_id: idArray,
        },
        groupby: ['doctor_id'],
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.tokenFilter(bh, parentSpanInst);
      //appendnew_next_timeFinderFilter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3IpfcYH11kNvA2La',
        spanInst,
        'timeFinderFilter'
      );
    }
  }

  async tokenFilter(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'tokenFilter',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkBInstance: SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkB.filterservice =
        SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkB.filterservice.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_YH9aqPJ68KAnCtkBInstance.filterSpecific(
          spanInst,
          bh.input.appoinmentfilter
        );
      bh.local.appointment_response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.appointmentErrorHandler(bh, parentSpanInst);
      //appendnew_next_tokenFilter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yVIelUS1QZYySz6S',
        spanInst,
        'tokenFilter'
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
      bh = await this.dataManageAndOutput(bh, parentSpanInst);
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

  async dataManageAndOutput(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'dataManageAndOutput',
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
        console.log(doctorItem?.token_limit);
        let balanceToken = doctorItem?.token_limit;
        balanceToken -= appointmentItem?.max_token || 0;
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
      bh.local.response = {
        statusCode: 200,
        data: results,
        selcted: topDoctor,
      };
      console.log(bh.local.response);

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_dataManageAndOutput
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a1z6MZMvU9kRrMNR',
        spanInst,
        'dataManageAndOutput'
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
