/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-list',
  templateUrl: './list.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class listComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_xbo4NVLXlqBuUBVD(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_xbo4NVLXlqBuUBVD(bh) {
    try {
      bh = this.sd_c7uZA4Qy3u4hki9n(bh);
      //appendnew_next_sd_xbo4NVLXlqBuUBVD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xbo4NVLXlqBuUBVD');
    }
  }

  navigateToDetailPage(blog: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { blog: blog };
      bh.local = {};
      bh = this.setLocalStorage(bh);
      //appendnew_next_navigateToDetailPage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rSGemBe2B0o4D321');
    }
  }

  //appendnew_flow_listComponent_start

  sd_c7uZA4Qy3u4hki9n(bh) {
    try {
      this.page.blogs = undefined;
      bh = this.sd_buG6U3hG0MXJpfNU(bh);
      //appendnew_next_sd_c7uZA4Qy3u4hki9n
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c7uZA4Qy3u4hki9n');
    }
  }

  sd_buG6U3hG0MXJpfNU(bh) {
    try {
      const page = this.page;
      page.blogs = [
        {
          id: 1,
          title: 'Blog one',
          description: 'This is blog one',
          image:
            'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=',
        },
        {
          id: 2,
          title: 'Blog two',
          description: 'This is blog two',
          image:
            'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=',
        },
        {
          id: 3,
          title: 'Blog three',
          description: 'This is blog three',
          image:
            'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=',
        },
        {
          id: 4,
          title: 'Blog four',
          description: 'This is blog four',
          image:
            'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=',
        },
        {
          id: 5,
          title: 'Blog five',
          description: 'This is blog five',
          image:
            'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=',
        },
      ];
      //appendnew_next_sd_buG6U3hG0MXJpfNU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_buG6U3hG0MXJpfNU');
    }
  }

  setLocalStorage(bh) {
    try {
      sessionStorage.setItem('selectedBlog', JSON.stringify(bh.input.blog));
      bh = this.sd_IQvdtanxKv4tukL2(bh);
      //appendnew_next_setLocalStorage
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HzbDjbTHVyKjtp8D');
    }
  }

  async sd_IQvdtanxKv4tukL2(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/detail/:id');
      await this.__page_injector__
        .get(Router)
        .navigate([
          this.sdService.formatPathWithParams(path, { id: bh.input.blog.id }),
        ]);
      //appendnew_next_sd_IQvdtanxKv4tukL2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IQvdtanxKv4tukL2');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_listComponent_Catch
}
