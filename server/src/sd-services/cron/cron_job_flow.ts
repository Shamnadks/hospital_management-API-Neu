// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class cron_job_flow {
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
    this.serviceName = 'cron_job_flow';
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
      instance = new cron_job_flow(
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
    //appendnew_flow_cron_job_flow_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: cron_job_flow');
    //appendnew_flow_cron_job_flow_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: cron_job_flow');
    //appendnew_flow_cron_job_flow_HttpIn
  }
  //   service flows_cron_job_flow

  async sd_KYwyoLelYmDT8g8I(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan(
      'sd_KYwyoLelYmDT8g8I',
      parentSpanInst
    );
    let bh: any = {
      input: {},
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TsvJGRm6oahD2OTA(bh, parentSpanInst);
      //appendnew_next_sd_KYwyoLelYmDT8g8I
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
        'sd_KYwyoLelYmDT8g8I',
        spanInst,
        'sd_KYwyoLelYmDT8g8I'
      );
    }
  }

  async recursion(
    parentSpanInst,
    appointments: any = undefined,
    count: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('recursion', parentSpanInst);
    let bh: any = {
      input: {
        appointments,
        count,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zPKCX78NJUvdm5XD(bh, parentSpanInst);
      //appendnew_next_recursion
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RZaBq8nROHOJZPNV',
        spanInst,
        'recursion'
      );
    }
  }
  //appendnew_flow_cron_job_flow_start

  async sd_TsvJGRm6oahD2OTA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TsvJGRm6oahD2OTA',
      parentSpanInst
    );
    try {
      bh.local.getAppointmentsQuery = `SELECT * FROM ${process.env.DB_SCHEMA}.appointments;`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_loMeuOC6borV7BQR(bh, parentSpanInst);
      //appendnew_next_sd_TsvJGRm6oahD2OTA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TsvJGRm6oahD2OTA',
        spanInst,
        'sd_TsvJGRm6oahD2OTA'
      );
    }
  }

  async sd_loMeuOC6borV7BQR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_loMeuOC6borV7BQR',
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
      let params = [];
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.getAppointmentsQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9Hn5Wy6CPyNYVovS(bh, parentSpanInst);
      //appendnew_next_sd_loMeuOC6borV7BQR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_loMeuOC6borV7BQR',
        spanInst,
        'sd_loMeuOC6borV7BQR'
      );
    }
  }

  async sd_9Hn5Wy6CPyNYVovS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9Hn5Wy6CPyNYVovS',
      parentSpanInst
    );
    try {
      console.log(bh.local.result, 'got appointments');

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rHcMFcbojDmdkbrT(bh, parentSpanInst);
      //appendnew_next_sd_9Hn5Wy6CPyNYVovS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9Hn5Wy6CPyNYVovS',
        spanInst,
        'sd_9Hn5Wy6CPyNYVovS'
      );
    }
  }

  async sd_rHcMFcbojDmdkbrT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rHcMFcbojDmdkbrT',
      parentSpanInst
    );
    try {
      let outputVariables = await this.recursion(
        spanInst,
        bh.local.result,
        bh.local.result.length
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_rHcMFcbojDmdkbrT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rHcMFcbojDmdkbrT',
        spanInst,
        'sd_rHcMFcbojDmdkbrT'
      );
    }
  }

  async sd_zPKCX78NJUvdm5XD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zPKCX78NJUvdm5XD',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['gt'](bh.input.count, 0, undefined, undefined)
      ) {
        bh = await this.sd_Xn8Gin3Qu1PIwlOJ(bh, parentSpanInst);
      } else {
        bh = await this.sd_uRf4gBTmkg04xLSV(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zPKCX78NJUvdm5XD',
        spanInst,
        'sd_zPKCX78NJUvdm5XD'
      );
    }
  }

  async sd_Xn8Gin3Qu1PIwlOJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Xn8Gin3Qu1PIwlOJ',
      parentSpanInst
    );
    try {
      bh.input.count--;

      console.log(bh.input.count);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.handleMain(bh, parentSpanInst);
      //appendnew_next_sd_Xn8Gin3Qu1PIwlOJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Xn8Gin3Qu1PIwlOJ',
        spanInst,
        'sd_Xn8Gin3Qu1PIwlOJ'
      );
    }
  }

  async handleMain(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'handleMain',
      parentSpanInst
    );
    try {
      console.log(
        bh.input.appointments?.[bh.input?.count]?.sla,
        'appointment data'
      );

      bh.local.currentAppointment = bh.input.appointments?.[bh.input.count];

      const current_date = new Date(
        bh.local?.currentAppointment?.appointment_date
      );

      bh.local.holidayFilterQuery = `SELECT *
FROM ${process.env.DB_SCHEMA}.holidays
WHERE starting_date > $1;
`;
      bh.local.holidayFilterQueryParams = [current_date];

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UtsAun4YGrIVLeiu(bh, parentSpanInst);
      //appendnew_next_handleMain
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_txfC9qaYXhkybDLn',
        spanInst,
        'handleMain'
      );
    }
  }

  async sd_UtsAun4YGrIVLeiu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UtsAun4YGrIVLeiu',
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
      //appendnew_next_sd_UtsAun4YGrIVLeiu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UtsAun4YGrIVLeiu',
        spanInst,
        'sd_UtsAun4YGrIVLeiu'
      );
    }
  }

  async extendedDays(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'extendedDays',
      parentSpanInst
    );
    try {
      const holidays = bh.local?.result;

      function daysBetween(startDate, endDate) {
        const oneDay = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs((startDate - endDate) / oneDay));
      }

      const slaStartDate = new Date(
        bh.local.currentAppointment.appointment_date
      );
      const slaEndDate = new Date(bh.local.currentAppointment.appointment_date);
      slaEndDate.setDate(
        slaStartDate.getDate() + Number(bh.local.currentAppointment.sla)
      );

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
        previous_date: new Date(bh.local.currentAppointment?.sla_date),
        id: bh.local.currentAppointment?.id,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_09V5A3bfkq69z8e9(bh, parentSpanInst);
      //appendnew_next_extendedDays
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GRQuvS9cpOx9m81p',
        spanInst,
        'extendedDays'
      );
    }
  }

  async sd_09V5A3bfkq69z8e9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_09V5A3bfkq69z8e9',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['sne'](
          bh.local.result.slaEndDate,
          bh.local.result.previous_date,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_M92f68LX0HFHU8IE(bh, parentSpanInst);
      } else {
        bh = await this.sd_HAnzjg9elOIuaHlt(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_09V5A3bfkq69z8e9',
        spanInst,
        'sd_09V5A3bfkq69z8e9'
      );
    }
  }

  async sd_M92f68LX0HFHU8IE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_M92f68LX0HFHU8IE',
      parentSpanInst
    );
    try {
      bh.local.updateAppointmentquery = `UPDATE ${process.env.DB_SCHEMA}.appointments
SET sla_date = $1
WHERE id=$2;
`;
      bh.local.updateAppointmentqueryParams = [
        bh.local.result?.slaEndDate,
        bh.local.result?.id,
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qZzSkpzWiFapFQpt(bh, parentSpanInst);
      //appendnew_next_sd_M92f68LX0HFHU8IE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_M92f68LX0HFHU8IE',
        spanInst,
        'sd_M92f68LX0HFHU8IE'
      );
    }
  }

  async sd_qZzSkpzWiFapFQpt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qZzSkpzWiFapFQpt',
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
      let params = bh.local.updateAppointmentqueryParams;
      params = params ? params : [];
      bh.local.response = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.updateAppointmentquery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dokv0wG4MEU3zsvr(bh, parentSpanInst);
      //appendnew_next_sd_qZzSkpzWiFapFQpt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qZzSkpzWiFapFQpt',
        spanInst,
        'sd_qZzSkpzWiFapFQpt'
      );
    }
  }

  async sd_dokv0wG4MEU3zsvr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dokv0wG4MEU3zsvr',
      parentSpanInst
    );
    try {
      console.log(bh.local.response, 'responseeeeee');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HAnzjg9elOIuaHlt(bh, parentSpanInst);
      //appendnew_next_sd_dokv0wG4MEU3zsvr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dokv0wG4MEU3zsvr',
        spanInst,
        'sd_dokv0wG4MEU3zsvr'
      );
    }
  }

  async sd_HAnzjg9elOIuaHlt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HAnzjg9elOIuaHlt',
      parentSpanInst
    );
    try {
      let outputVariables = await this.recursion(
        spanInst,
        bh.input.appointments,
        bh.input.count
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_HAnzjg9elOIuaHlt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HAnzjg9elOIuaHlt',
        spanInst,
        'sd_HAnzjg9elOIuaHlt'
      );
    }
  }

  async sd_uRf4gBTmkg04xLSV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uRf4gBTmkg04xLSV',
      parentSpanInst
    );
    try {
      return;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_uRf4gBTmkg04xLSV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uRf4gBTmkg04xLSV',
        spanInst,
        'sd_uRf4gBTmkg04xLSV'
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
  //appendnew_flow_cron_job_flow_Catch
}
