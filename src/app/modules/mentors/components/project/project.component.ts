import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml,SafeStyle } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef ,ChangeDetectorRef} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProjectService } from '../../../../core/services/project.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonService } from 'src/app/core/services/common.service';
import { ImageSource } from 'src/app/core/enums/image-upload-source.enum';
import { StudentService } from 'src/app/core/services/student.service';
import { User } from 'src/app/core/models/user.model';
import { ToastrService } from 'ngx-toastr';
import { environment, timezone } from 'src/environments/environment';
import { Dashboard, MentorDashboard, SignedUpProjects } from 'src/app/core/models/student-dashboard.model';
import { MentorDashboardService } from 'src/app/core/services/mentor-dashboard.service';
import { StudentProfileStatusText } from 'src/app/core/enums/student-profile-status-text.enum';
import { MentorService } from 'src/app/core/services/mentor.service';
import { Router } from '@angular/router';
import { AnnouncementService } from 'src/app/core/services/announcement.service';
//import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import * as moment from 'moment';
import * as _ from 'lodash';

// Load library for pdf
import { jsPDF } from 'jspdf';
import domtoimage from 'dom-to-image';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
 //backgroundImageUrl: string = '../../assets/images/resources/pdf-bg.jpeg'
 backgroundImage: SafeStyle;

  removePostImageFile: Boolean = false;
  imageSelect: boolean = false;
  stateProjectId: any;

  //delete Event
  event_action: any;
  post_index: any;
  event_index: any;
  project: any;
  user: any;

 
  modalRef: BsModalRef;
  response: any = [];
  projectinfo: any = [];
  description: any = [];
  allchatdetail: any = [];
  result: any;
  chatpost: any;
  commentForm: any;
  userInfo: any;
  userid: any;
  userProfileImage:any;
  userName: any;
  userEmail: any;
  userMnumber: any;
  bannerImage: any;
  allfile: any = [];
  projectfile: any = [];
  getdata: any;
  allFeeds: any = [];
  isReadMore = false;
  selectedProejctIndex: number = 0;
  selectedProjectData: any;
  feedComment: any;
  userList: User[] = [];
  Chatmsg_danger: boolean = false;
  addSchedule: boolean = true;

  // Project Add form
  CurrentBanner: any;

  // Post Update
  postIsEdit: boolean = false;
  PostEditImage: any;
  postFeedId: any;
  postIndex: any;

  deletePostId: any;
  postEdit: Boolean = false;

  //announcement
  announcementsArray: any;
  announcementLink: any;
  safeHTML: SafeHtml;
  announcementWithURL: any[] = [];
  linkArray: any[] = [];

  isCharheStudent: number = -1;
  projectFees: any = '';
  addProjectForm: FormGroup;
  throw_msg: any;
  submitted: boolean = false;
  msg_success: boolean = false;
  msg_danger: boolean = false;
  sdg_selection: any = [];
  projectImage: any;
  projectWeeklength: any = [1, 2, 3, 4];
  monthDurationActive: boolean = false;

  postForm: FormGroup;
  Postmsg_danger: boolean = false;
  submittedPost: boolean = false;
  allProjectPost: any = [];
  hyperlinkArray: any = [];

  //delete file
  deleteFileId: any;
  deleteFileUser: any;
  deleteFileProject: any;

  bannerImages: any = [];
  bannerFor: String;

  // displayedImage1 = "https://s3.ap-southeast-1.amazonaws.com/storage.collegey/.png/1646367130670-1642507439852-article-image6.png";
  // displayedImage2 = "https://s3.ap-southeast-1.amazonaws.com/storage.collegey/.jpg/1645072785246-demo%20-%20Copy.jpg";
  // displayedImage3 = "https://s3.ap-southeast-1.amazonaws.com/storage.collegey/.jpg/1646918482000-marguerite.jpg";


  // Mentor Project SDG
  dropdownSettingsProjectSdg = {};
  projectKeywordArray: any = [];
  currentProjectId: any;

  // schedule Event Form

  scheduleEventForm: FormGroup;
  submittedEvent: boolean = false;
  allProjectEvent: any = [];
  ProjectOwnerData: any = [];
  EventUserList: any = [];
  eventIndex: any;
  dashboard: MentorDashboard = new MentorDashboard();
  progressBarValue: number = 25;
  timeZoneList: any;
  dropdownSettings: {};
  userListOptions = [];
  updateData: any;

  // invite People Form

  invitePeopleForm: FormGroup;
  submittedInvitePeople: boolean = false;

  // Set Last date and start date
  projectStartDate: any;
  projectSetLastDate: any;
  ProjectSetLastMaxiDate: any;

  projectFilterData: any = {
    country: "",
    projectTag: [],
    IndustryOption: "",
    projectTypeArray: "",
  };

  wordCount: any;
  words: any;

  //show word limit
  showWordLimitError: Boolean = false;

  fetchcurrentImageheight: any;
  fetchcurrentImagewight: any;
  projectFeedData:any;
  selectedTimeZone: any;
  projectIsPayable:any = 1;

  // Genrate Pdf 
  dafaultGenratepdf: boolean = false;
  pdfData: any = [];

  schoolYearArray: any[] = [];
  sortedEducationSchoolFormArray: any = [];

  constructor(
    private modalService: BsModalService,
    private projectService: ProjectService,
    private fb: FormBuilder,
    private authService: AuthService,
    public commonService: CommonService,
    private studentService: StudentService,
    private toastrService: ToastrService,
    private http: HttpClient,
    private mentorDashboardService: MentorDashboardService,
    private mentorService: MentorService,
    private router: Router,
    private announcementService: AnnouncementService,
    private datePipe: DatePipe,
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    //private sanitizer: DomSanitizer
  ) {
    this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle('url("../../assets/images/resources/pdf-bg.jpeg")');
    this.bannerFor = "mentor";
    this.timeZoneList = timezone;
    const loggedInInfo = this.authService.getUserInfo();
    this.userProfileImage = loggedInInfo?.user.avatar;
    this.userid = loggedInInfo?.user._id;
    this.userName = loggedInInfo?.user.name;
    this.userEmail = loggedInInfo?.user.email;
    this.userMnumber = loggedInInfo?.user.phone_number;

    this.addProjectForm = this.fb.group({
      projectTitle: ['', [Validators.required, Validators.pattern(/^(?!\s*$).+/)]],
      keyword: ['', Validators.required],
      lastDate: ['', Validators.required],
      startDate: ['', Validators.required],
      minNumberOfStudentsAllowed: ['', [Validators.required, Validators.min(3)]],
      maxNumberOfStudentsAllowed: ['', [Validators.required, Validators.max(15)]],
      projectUNSDG: ['', Validators.required],
      aboutProject: ['', [Validators.required, Validators.pattern(/^(?!\s*$).+/)]],
      projectDuration: ['', Validators.required],
      week1Duration: [''],
      week2Duration: [''],
      week3Duration: [''],
      week4Duration: [''],
      week5Duration: [''],
      week6Duration: [''],
      monthDuration: [''],
      range_price: [this.projectFeedData?.default_price],
      isPaid: [''],
      
    });

    this.postForm = this.fb.group({
      postText: ['', [Validators.required, Validators.pattern(/^(?!\s*$).+/)]],
      post_comment: [''],
      postImageUrl: [''],
    });

    this.scheduleEventForm = this.fb.group({
      eventName: ['', Validators.required],
      timezone: ['', Validators.required],
      startDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endDate: ['', Validators.required],
      endTime: ['', Validators.required],
      event_schedule: ['', Validators.required],
      add_guest: ['', Validators.required],
    });
    this.isCharheStudent = 0;

    var myDateSet = new Date();
    var newDateSet = this.datePipe.transform(myDateSet, 'yyyy-MM-dd');
    this.projectStartDate = newDateSet;
    this.projectSetLastDate = newDateSet;

    if (this.router.getCurrentNavigation().extras.state) {
      this.stateProjectId = this.router.getCurrentNavigation().extras.state;
    }

    this.invitePeopleForm = this.fb.group({
      requestedForName: ['', Validators.required],
      useremailid: ['', Validators.required],
    });

  }

  linkify(text, index) {
    var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    if ((new RegExp(urlRegex)).test(text)) {
      this.announcementWithURL.push(index);
    }

    return text.replace(urlRegex, function (url) {
      return '<a href="' + url + '" target="_blank" style="color: white; text-decoration: underline; font: normal normal 500 16px/22px Nunito;">' + url + '</a>';
    });
  }

  onChangeProjectStart(event) {
    var myCurrentDate = new Date(event.target.value);
    myCurrentDate.setDate(myCurrentDate.getDate() - 1);
    var newPlusDate = this.datePipe.transform(myCurrentDate, 'yyyy-MM-dd');
    this.projectSetLastDate = newPlusDate;

    // Set Maximum Date
    var myDateSet1 = new Date();
    myDateSet1.setDate(myDateSet1.getDate() + 1);
    var newDateSet1 = this.datePipe.transform(myDateSet1, 'yyyy-MM-dd');
    this.ProjectSetLastMaxiDate = newDateSet1;

    this.addProjectForm.patchValue({
      lastDate: this.ProjectSetLastMaxiDate,
    });
  }

  getAnnouncement() {
    let obj = {
      forWhom: 'Mentors',
      type: 'Project'
    }
    this.announcementService.getAnnouncements(obj).subscribe((res) => {
      this.announcementsArray = res;
      for (let index = 0; index < this.announcementsArray.data.length; index++) {
        this.linkArray.splice(index, 0, 'announcement');
        this.announcementLink = this.linkify(this.announcementsArray.data[index].details, index)
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.announcementLink);
        if (this.announcementWithURL.indexOf(index) != -1) {
          this.linkArray.splice(index, 1, this.safeHTML);
        }
      }
    })
  }

  public hasErrorInvitePeople = (controlName: string, errorName: string) => {
    return this.invitePeopleForm.controls[controlName].hasError(errorName);
  };
  
  wordCounter(event) {
    if (event.keyCode != 32) {
      this.wordCount = event.target.value ? event.target.value.split(/\s+/) : 0;
      this.words = this.wordCount ? this.wordCount.length : 0;
    }

    if (this.words > 250) {
      this.showWordLimitError = true;
    } else {
      this.showWordLimitError = false;
    }
  }

  wordCounts(text, limit) {
    this.wordCount = text ? text.split(/\s+/) : 0;
    this.words = this.wordCount ? this.wordCount.length : 0;
    if (this.words > limit) {
      return true;
    } else {
      return false;
    }
  }


  ngOnInit(): void {
    this.getProjectFeesData();
    this.getDashboardDetail();
    this.getCurrentUserData();
    this.getBanners();
    let obj = { user_id: this.userid, projectFilter: this.projectFilterData };
    this.allfile = [];
    this.projectService.projectdashboard_detail(obj).subscribe((res: any) => {
      this.result = res.results;
      this.projectinfo = res.data;
      if (this.stateProjectId) {
        // console.log("this.stateProjectId===",this.stateProjectId);        
        const index = this.projectinfo.projectDashboardProjects.findIndex(x => x.project._id === this.stateProjectId.projectId);
        // console.log("index====",index);        
        if (index != -1) {
          this.projectdescp(this.stateProjectId.projectId, index)
        } else {
          this.router.navigate(['/mentors/project']);
        }
      }
      this.currentProjectId = this.projectinfo.projectDashboardProjects[this.selectedProejctIndex].project._id;
      this.projectService.project_detail(this.projectinfo.projectDashboardProjects[this.selectedProejctIndex].project._id).subscribe((res: any) => {
        this.result = res.results;
        this.userList = res.data.projectDetails.projectDetail.projectMembers;
        this.allProjectPost = res.data.projectDetails.projectDetail.projectPost;
        this.allProjectEvent = res.data.projectDetails.projectDetail.projectEvent;
        this.ProjectOwnerData = res.data.projectDetails.projectDetail.projectOwner;

        this.selectedProjectData = res.data.projectDetails.projectDetail;
        this.allchatdetail = res.data.projectDetails.projectChat;
        this.allfile = res.data.projectDetails.projectFiles;
        this.projectfile = res.data.projectDetails.projectFiles;

        this.userList.map(userlist => {
          this.userListOptions.push({ item_id: userlist._id, item_text: userlist.name + " " + userlist.last_name })
        })

        this.chatsForm();
        this.commentFeedForm();
        this.getUserList();
        this.projectService.getAllFeeds(this.selectedProjectData._id).subscribe((res: any) => {
          this.response = res;
          this.getdata = res.data.projectFeeds;
          this.allFeeds = res.data.projectFeeds;
          const loggedInInfo = this.authService.getUserInfo();
          this.userInfo = loggedInInfo ? loggedInInfo.user : null;
          this.userid = this.userInfo.id;
        });

        for (let j = 0; j < this.allProjectPost.length; j++) {
          var postCreateAgo = this.allProjectPost[j].createdAt;
          this.allProjectPost[j].timeago = this.timeDifference(postCreateAgo);

          for (let k = 0; k < this.allProjectPost[j].comment?.length; k++) {
            var postCommentAgo = this.allProjectPost[j].comment[k].createdAt;
            this.allProjectPost[j].comment[k].timeagoComment = this.timeDifference(postCommentAgo);
          }

        }

        for (let f = 0; f < this.allfile.length; f++) {
          var postFileTimeAgo = this.allfile[f].createdAt;
          this.allfile[f].timeago = this.timeDifference(postFileTimeAgo);
        }

      });
    });
     
    this.sdg_selection = [
      'Goal 1 - No Poverty',
      'Goal 2 - Zero Hunger',
      'Goal 3 - Good Health and Well-being',
      'Goal 4 - Quality Education',
      'Goal 5 - Gender Equality',
      'Goal 6 - Clean Water and Sanitation',
      'Goal 7 - Affordable and Clean Energy',
      'Goal 8 - Decent Work and Economic Growth',
      'Goal 9 - Industry, Innovation and Infrastructure',
      'Goal 10 - Reduced Inequality',
      'Goal 11 - Sustainable Cities and Communities',
      'Goal 12 - Responsible Consumption and Production',
      'Goal 13 - Climate Action',
      'Goal 14 - Life Below Water',
      'Goal 15 - Life on Land',
      'Goal 16 - Peace and Justice Strong Institutions',
      'Goal 17 - Partnerships to achieve the Goal'
    ];
    
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      limitSelection: 4,
      noDataAvailablePlaceholderText: 'No project members found'
    };

    this.dropdownSettingsProjectSdg = {
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true,
      limitSelection: 2
    };

    this.getAnnouncement();
  }

  deleteFile() {
    let id = this.deleteFileId;
    let project = this.deleteFileProject;
    let user = this.deleteFileUser;

    this.projectService.deleteProjectFile({ id, project, user }).subscribe((response: any) => {
      if (response.message) {
        this.toastrService.success(response.message);
        this.allfiles();
        this.modalRef.hide();
      }
    });

  }

  deleteConformationFile(template: TemplateRef<any>, fileId: any, project: any, user: any) {
    this.deleteFileId = fileId;
    this.deleteFileProject = project;
    this.deleteFileUser = user;
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  projectStatusConformation(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
  openmetting(){
    //let id=url.uid
    this.router.navigateByUrl('/network')
    

  }

  onChangeProjectStatus() {
    const obj = {
      status_value: 'completed',
      project_id: this.currentProjectId,
      user_id: this.userid,
    };
    this.genrateCertificateUserWise();
    this.mentorService.updateMenprojectStatus(obj).subscribe(
      (response) => {
        this.genrateCertificateUserWise();
        this.toastrService.success(response.message);
        this.modalRef.hide();
        
        setTimeout(() => {
          //this.router.navigateByUrl('/mentors/dashboard'); 
          window.location.reload();
        },5000);
        // //this.router.navigateByUrl("men")
      },
      (err) => {
        this.toastrService.error('project status not update');
        this.modalRef.hide();

      },
    );
  }

  genrateCertificateUserWise(){
    // Logic For Pdf Genrate
    let educationSchoolFormArray = [];
    this.pdfData = [];
    this.dafaultGenratepdf = true;
    if(this.selectedProjectData?.projectMembers?.length > 0)
    {
      for(let i = 0; i < this.selectedProjectData?.projectMembers?.length; i++) {

        let studentDataList =  this.selectedProjectData?.projectMembers[i];
        for(let ed = 0; ed < studentDataList?.student_profile?.history_updated?.education?.length; ed++) {
          let typeEducaion = studentDataList?.student_profile?.history_updated?.education[ed]?.type;
          if(typeEducaion == 'School' || typeEducaion == 'high school student')
          {
            educationSchoolFormArray.push(studentDataList?.student_profile?.history_updated?.education[ed]); 
          }  
        }

        //SORT SCHOOL BY YEAR
        for (let index = 0; index < educationSchoolFormArray.length; index++) {
          let end_year = educationSchoolFormArray[index]?.grade[0].end_year;
          if (!this.schoolYearArray.includes(end_year)) {
            this.schoolYearArray.push(end_year);
          }
        }

        this.schoolYearArray.sort(function(a, b) {
          return b - a;
        });
        
        for (let Finindex = 0; Finindex < this.schoolYearArray.length; Finindex++) {
          for (let j = 0; j < educationSchoolFormArray.length; j++) {
            if (parseInt(this.schoolYearArray[Finindex]) == parseInt(educationSchoolFormArray[j]?.grade[0].end_year)) {
              this.sortedEducationSchoolFormArray.push(educationSchoolFormArray[j])
            }            
          }          
        }

        let project_week;
        if(this.selectedProjectData?.projectPlan?.projectDuration.includes('month'))
        {
          project_week = this.selectedProjectData?.projectPlan?.projectDuration;
        }
        else
        {
          project_week = this.selectedProjectData?.projectPlan?.projectDuration +' week';
        }

        let studentSchoolName = this.sortedEducationSchoolFormArray[0]?.name ? this.sortedEducationSchoolFormArray[0]?.name : 'Collegy';
        let studentSchoolCity = this.sortedEducationSchoolFormArray[0]?.locationCity ? this.sortedEducationSchoolFormArray[0]?.locationCity : 'Collegy';
        
        let pdfObj = {
          student_name: this.selectedProjectData?.projectMembers[i]?.name + ' ' + this.selectedProjectData?.projectMembers[i]?.last_name,
          student_projectname: this.selectedProjectData?.title,
          project_week: project_week,
          project_completed_date: new Date(),
          student_school_name: studentSchoolName +', '+studentSchoolCity,
        }
        this.pdfData.push(pdfObj);
      }

      for(let i = 0; i < this.selectedProjectData?.projectMembers?.length; i++) {
        var convertIdDynamic = 'contentToConvert_'+i;
        this.genratePdf(convertIdDynamic,this.selectedProjectData?.projectMembers[i]?._id,this.selectedProjectData?._id);
      }
    }
  }

  genratePdf(convertIdDynamic:any,memberId:any,memberProjectId:any) {
    this.dafaultGenratepdf = true;
    setTimeout(() => {
      const dashboard = document.getElementById(convertIdDynamic);
      const dashboardHeight = dashboard.clientHeight;
      const dashboardWidth = dashboard.clientWidth;
      const options = { background: 'white', width: dashboardWidth, height: dashboardHeight };

      domtoimage.toPng(dashboard, options).then((imgData) => {
        const doc = new jsPDF(dashboardWidth > dashboardHeight ? 'l' : 'p', 'mm', [dashboardWidth, dashboardHeight]);
        const imgProps = doc.getImageProperties(imgData);
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        //doc.save('Dashboard for hyperpanels.pdf');

        const pdfData = new File([doc.output("blob")], "projectCertificate.pdf", {
          type: "application/pdf",
        });
        
        this.uploadFileApi(pdfData).then((data) => {
          let objpdf = {
            pdfurl:data,
            projectId: memberProjectId,
            userId: memberId,
          };
          this.studentService.updatePdfInUser(objpdf).subscribe(
            (response) => { 

            },
            (err) => {

            },
          );
        }).catch((err) => {
          this.toastrService.error('Image upload faild');
        })

      });
      this.dafaultGenratepdf = false;
    }, 1000);
  }


  public hasError = (controlName: string, errorName: string) => {
    return this.addProjectForm.controls[controlName].hasError(errorName);
  };

  public hasErrorPost = (controlName: string, errorName: string) => {
    return this.postForm.controls[controlName].hasError(errorName);
  };

  public hasErrorEvent = (controlName: string, errorName: string) => {
    return this.scheduleEventForm.controls[controlName].hasError(errorName);
  };

  getCurrentUserData() {
    const obj = {
      userid: this.userid,
    };
    this.mentorDashboardService.getCurrentUserData(obj).subscribe(
      (response) => {
        this.CurrentBanner = response.data.bannerImage;
      },
      (err) => {

      },
    );
  }

  getProjectFeesData() { 
    const obj = {
      fees_type: 'mentor',
    };
    this.mentorDashboardService.getProjectFeesData(obj).subscribe(
      (response) => {
        this.projectFeedData = response?.data;
      },
      (err) => {

      },
    );
  }

  getBanners() {
    const obj = {
      bannerFor: this.bannerFor,
    };
    this.projectService.getBanners(obj).subscribe(
      (response) => {
        this.bannerImages = response.data;
        this.projectImage = this.bannerImages[0].imagePath;
      },
      (err) => {

      },
    );
  }

  CreateNewProject() {
    this.submitted = true;
    this.projectKeywordArray = [];
    if (!this.projectImage) {
      this.projectImage = this.bannerImages[0];
    }

    let obj = this.addProjectForm.value;
    obj['user_id'] = this.userid;
    obj['project_img'] = this.projectImage
    obj['username'] = this.userName;
    obj['useremail'] = this.userEmail;
    obj['userphone'] = this.userMnumber;
    obj['projectIsPayable'] = this.projectIsPayable;
    if (this.addProjectForm.value.range_price == 0) {
      obj['projectfess'] = this.projectFees;
    }
    else {
      obj['projectfess'] = this.addProjectForm.value.range_price;
    }

    for (let i = 0; i < obj.keyword.length; i++) {
      this.projectKeywordArray.push(obj.keyword[i].value);
    }

    const aboutProjectCount = this.wordCounts(this.addProjectForm.value.aboutProject, 250);

    if (this.addProjectForm.invalid || aboutProjectCount) {
      return;
    }
    obj['keyword'] = this.projectKeywordArray;
    this.mentorService.updateMentorProfileStep03(obj).subscribe(
      (response) => {
        this.toastrService.success(response.message);
        this.addProjectForm.reset();
        this.submitted = false;
        this.modalRef.hide();
        this.router.navigateByUrl('mentors/dashboard');
      },
      (err) => {
        this.toastrService.error('project not update');
        this.modalRef.hide();
        this.submitted = false;
      },
    );
  }

  selectImage(image) {
    if (image) {
      this.projectImage = image.imagePath;
    } else {
      this.projectImage = this.bannerImages[0];
    }

    // console.log("this.projectImage", this.projectImage)
  }

  changeProjectduration(event) {
    this.projectWeeklength = [];
    if (event.target.value == '3 month' || event.target.value == '4 month' || event.target.value == '5 month' || event.target.value == '6 month' || event.target.value == '7 month' || event.target.value == '8 month' || event.target.value == '9 month') {
      this.monthDurationActive = true;
    }
    else {
      for (let f = 1; f <= event.target.value; f++) {
        this.projectWeeklength.push(f);
      }
      this.monthDurationActive = false;
    }
  }

  clickRadio(event) {
    if (event.target.value == 1) {
      this.isCharheStudent = 1;
      this.addProjectForm.value.range_price = this.projectFeedData?.default_price;
      this.projectFees = 0;
      this.projectIsPayable = 1;
    } else if (event.target.value == 0) {
      this.isCharheStudent = 0;
      this.projectFees = 185;
      this.addProjectForm.value.range_price = this.projectFeedData?.default_price;
      this.projectIsPayable = 1;
    } else {
      this.isCharheStudent = -1
    }
  }

  getDashboardDetail() {
    this.mentorDashboardService.getDashboardDetail().subscribe((res) => {
      if (res.profile.profile_completion) {
        this.calculateProfileProgress(
          res.profile.profile_completion.profile_text
        );
      }
      this.dashboard = res;
    });
  }


  calculateProfileProgress(statusText) {
    this.progressBarValue = 25;
    if (statusText === StudentProfileStatusText.Beginner) {
      this.progressBarValue = this.progressBarValue * 1;
    } else if (statusText === StudentProfileStatusText.Intermediate) {
      this.progressBarValue = this.progressBarValue * 2;
    } else if (statusText === StudentProfileStatusText.Advanced) {
      this.progressBarValue = this.progressBarValue * 3;
    } else if (statusText === StudentProfileStatusText.Expert) {
      this.progressBarValue = this.progressBarValue * 4;
    }
  }

  uploadFileApi(file) {
    return new Promise((resolve, reject) => {
      let formData = new FormData();
      formData.append('files', file);
      this.http.post(environment.apiEndpointNew + 'public/uploadFile', formData)
        .subscribe((res: any) => {
          resolve(res.url);
        }, (err => {
          reject(err);
        }))
    })
  }

  getUserList() {
    this.commonService.getUserListComments().subscribe((res: any) => {
      //this.userList = res;
    })
  }

  openAddEvent(template: TemplateRef<any>) {
    this.scheduleEventForm.reset();
    this.addSchedule = true;
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  createproject(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  projectDashboardProjects() {
    let obj = { user_id: this.userid, projectFilter: this.projectFilterData };
    this.projectService.projectdashboard_detail(obj).subscribe((res: any) => {
      this.result = res.results;
      this.projectinfo = res.data;
    });
  }

  projectdescp(id, index) {
    this.userListOptions = [];
    this.currentProjectId = id;
    this.selectedProejctIndex = index;
    this.postForm.reset();
    this.PostEditImage = '';
    this.projectService.project_detail(id).subscribe((res: any) => {
      this.result = res.results;
      this.selectedProjectData = res.data.projectDetails.projectDetail;

      this.allchatdetail = res.data.projectDetails.projectChat;
      this.projectfile = res.data.projectDetails.projectFiles;
      this.allProjectPost = res.data.projectDetails.projectDetail.projectPost;
      this.allProjectEvent = res.data.projectDetails.projectDetail.projectEvent;
      this.ProjectOwnerData = res.data.projectDetails.projectDetail.projectOwner;
      this.userList = res.data.projectDetails.projectDetail.projectMembers;
      this.userList.map(userlist => {
        this.userListOptions.push({ item_id: userlist._id, item_text: userlist.name + " " + userlist.last_name })
      })

      for (let j = 0; j < this.allProjectPost.length; j++) {
        var postCreateAgo = this.allProjectPost[j].createdAt;
        this.allProjectPost[j].timeago = this.timeDifference(postCreateAgo);

        for (let k = 0; k < this.allProjectPost[j].comment?.length; k++) {
          var postCommentAgo = this.allProjectPost[j].comment[k].createdAt;
          this.allProjectPost[j].comment[k].timeagoComment = this.timeDifference(postCommentAgo);
        }

      }

      for (let f = 0; f < this.allfile.length; f++) {
        var postFileTimeAgo = this.allfile[f].createdAt;
        this.allfile[f].timeago = this.timeDifference(postFileTimeAgo);
      }


    });
  }

  addingGuest(userslist) {
    // console.log("Selected userslist",userslist,this.scheduleEventForm);
  }

  openEditEvent(template: TemplateRef<any>, index) {
    this.addSchedule = false;
    const updateDate = this.allProjectEvent[index];
    console.log("updateDate.startTime",updateDate.startTime);
    this.updateData = this.allProjectEvent[index];
    this.scheduleEventForm.controls.eventName.patchValue(updateDate.eventName);
    this.scheduleEventForm.controls.timezone.patchValue(updateDate.timezone);
    this.scheduleEventForm.controls.startTime.patchValue(updateDate.startTime);
    this.scheduleEventForm.controls.endTime.patchValue(updateDate.endTime);
    this.scheduleEventForm.controls.event_schedule.patchValue(updateDate.event_schedule);
    if (updateDate.startTime != null) {
      this.scheduleEventForm.patchValue({
        startDate: moment(updateDate.startDate).format('YYYY-MM-DD')
      });
    }

    if (updateDate.endDate != null) {
      this.scheduleEventForm.patchValue({
        endDate: moment(updateDate.endDate).format('YYYY-MM-DD')
      });
    }
    let eventGuest = [];
    if (updateDate.eventGuest) {
      let eventUsers = updateDate.eventGuest;
      for (let i in eventUsers) {
        let eventUsersObj = _.find(this.userListOptions, { item_id: eventUsers[i]._id });
        if (eventUsersObj)
          eventGuest.push(eventUsersObj);
      }
    }

    this.scheduleEventForm.controls.add_guest.patchValue(eventGuest);

    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  openInvitePeople(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg', ignoreBackdropClick: true })
    );
  }
  
  sendInvitePeopleLink() {
    this.submittedInvitePeople = true;
    let obj = this.invitePeopleForm.value;
    obj['user_id'] = this.userid;
    obj['projectId'] = this.selectedProjectData._id;

    if (this.invitePeopleForm.invalid) {
      return;
    }
    // return false;
    this.projectService.inviteProjectLink(obj).subscribe(
      (response) => {
        if (response.status == 'success') {
          //this.toastrService.success(response.message);
          this.toastrService.success("Invite link sent successfully");
          this.invitePeopleForm.reset();
          this.submittedInvitePeople = false;
          this.modalRef.hide();
        } else {
          this.toastrService.error(response.message);
          this.submittedInvitePeople = false;
          this.modalRef.hide();
        }

      },
      (err) => {
        // this.toastrService.error(err);
        this.submittedInvitePeople = false;
        this.modalRef.hide();
      },
    );


  }

  getallchats() {
    this.projectService.allchat(this.selectedProjectData._id).subscribe((res: any) => {
      this.allchatdetail = res.data.projectChats;
      this.allfiles();
    });
  }

  chatsForm() {
    this.commentForm = this.fb.group({
      text: ['', Validators.required],
      user: [this.userid],
      project: [this.selectedProjectData._id],
    });
  }

  commentFeedForm() {
    this.feedComment = this.fb.group({
      text: ['', Validators.required],
      user: [this.userid],
      project: [this.selectedProjectData._id],
    });
  }

  allfiles() {
    this.projectService.getAllProjectFiles(this.selectedProjectData._id).subscribe((res: any) => {
      this.allfile = res.data.projectFiles;
      this.projectfile = this.allfile;
      this.allfile[0].timeago = 1 + ' seconds ago';
      for (let f = 0; f < this.allfile.length; f++) {
        var postFileTimeAgo = this.allfile[f].createdAt;
        if (f != 0) {
          this.allfile[f].timeago = this.timeDifference(postFileTimeAgo);
        }
      }
    });
  }

  bannerUpload(event) {
    let file = event.target.files;
    let obj = {
      "project": this.selectedProjectData._id,
      "user_id": this.userid,
    };
    if (file[0].type == 'image/jpeg' || file[0].type == 'image/png' || file[0].type == 'image/jpg' || file[0].type == 'application/vnd.ms-excel' || file[0].type == 'application/pdf' || file[0].type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file[0].type == 'application/vnd.ms-powerpoint' || file[0].type == 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
      if (file[0].size / 1024 / 1024 > 2) {
        this.toastrService.error('The file is too large. Allowed maximum size is 2 MB.');
        return;
      }
      if (file && file.length > 0) {
        let file_type = file[0].name.split(".").pop();
        const fd = new FormData();
        fd.append('file', file[0]);
        fd.append('type', file_type);
        fd.append('file_name', file[0].name);
        fd.append('project', this.selectedProjectData._id);
        fd.append('user_id', this.userid);
        this.projectService.postfile(this.selectedProjectData._id, fd).subscribe((res) => {
          this.allfiles();
        });
      }
      event.target.value = null;
    }
    else {
      event.target.value = null;
      this.toastrService.error('Allow only .png, .jpeg, .jpg, .pdf, .ppt, .pptx, .docx, .xls, .xlsx, .doc this file');
      return;
    }

  }

  uploadProjectImage(event) {
    var file = event.target.files;
    if (file[0].type == 'image/jpeg' || file[0].type == 'image/png' || file[0].type == 'image/jpg') {
      if (event.target.files[0].size / 1024 / 1024 > 10) {
        this.toastrService.error('The file is too large. Allowed maximum size is 10 MB.');
        return;
      }

      var _URL = window.URL || window.webkitURL;
      var fileMatch, imgesData;

      if ((fileMatch = event.target.files[0])) {
        imgesData = new Image();
        var objectUrl = _URL.createObjectURL(fileMatch);
        imgesData.onload = function () {
          var currentWidth = this.width;
          var currentHeight = this.height;
          window.localStorage.setItem('currentImageheight', currentHeight);
          window.localStorage.setItem('currentImagewight', currentWidth);
          _URL.revokeObjectURL(objectUrl);
        };
        imgesData.src = objectUrl;
      }

      setTimeout(() => {
        this.fetchcurrentImageheight = localStorage.getItem('currentImageheight');
        this.fetchcurrentImagewight = localStorage.getItem('currentImagewight');
        if (this.fetchcurrentImagewight <= 2000 && this.fetchcurrentImageheight <= 2000) {
          this.uploadFileApi(event.target.files[0]).then((data) => {
            this.projectImage = data;
          }).catch((err) => {
            this.toastrService.error('Image upload faild');
          })
        }
        else {
          this.toastrService.error('The maximum size for the 220 X 230');
          localStorage.removeItem('currentImageheight');
          localStorage.removeItem('currentImagewight');
          return;
        }
      }, 1000);

    }
    else {
      this.toastrService.error('Allow only .png, .jpeg, .jpg this file');
      return;
    }
  }

  postchats() {
    let datas = this.commentForm.value;
    if (datas.text == '') {
      this.Chatmsg_danger = true;
      return;
    }
    this.Chatmsg_danger = false;
    let data = {
      text: datas.text,
      user: this.userid,
      project: this.selectedProjectData._id,
    };
    this.projectService.postchat(this.selectedProjectData._id, data).subscribe((res) => {
      this.chatpost = res;
      this.getallchats();
    });
  }

  onpostFileSelect(event) {
    var file = event.target.files;
    if (file[0].type == 'image/jpeg' || file[0].type == 'image/png' || file[0].type == 'image/jpg') {
      if (event.target.files[0].size / 1024 / 1024 > 10) {
        this.toastrService.error('The file is too large. Allowed maximum size is 10 MB.');
        return;
      }
      this.uploadFileApi(event.target.files[0]).then((data) => {
        this.removePostImageFile = false;       
        this.postForm.get('postImageUrl').setValue(data);
        this.PostEditImage=data
        event.target.value = null;
        this.imageSelect = true;
        this.cdr.detectChanges();        
      }).catch((err) => {
        this.toastrService.error('Image upload faild');
        event.target.value = null;
      })
    }
    else {
      this.toastrService.error('Allow only .png, .jpeg, .jpg this file');
      return;
    }

  }
  removePostImage() {
    this.removePostImageFile = true;
    this.postForm.get("postImageUrl").setValue(null)
    this.PostEditImage = null
  }

  fetchandFindURLs(message) {
    if (!message) return;
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    let newhyperLink = [];
    message.replace(urlRegex, function (url) {
      var hyperlink = url;
      if (!hyperlink.match('^https?:\/\/')) {
        hyperlink = 'http://' + hyperlink;
      }
      newhyperLink.push(hyperlink);
    });

    for (let i = 0; i < newhyperLink?.length; i++) {
      this.hyperlinkArray.push(newhyperLink[i]);
    }
  }

  postProject() {
    this.submittedPost = true;
    this.hyperlinkArray = [];
    let obj = this.postForm.value;
    obj['user'] = this.userid;
    obj['project'] = this.selectedProjectData._id;
    if (this.postForm.invalid) {
      return;
    }

    //this.fetchandFindURLs(obj.postText); 
    this.fetchandFindURLs(obj.post_comment);

    if (typeof this.hyperlinkArray != 'undefined' && this.hyperlinkArray.length > 0) {
      obj['post_url'] = this.hyperlinkArray[0];
    }

    if (!this.postIsEdit) {
      this.projectService.addNewProjectPost(obj).subscribe(
        (response) => {
          this.toastrService.success(response.message);
          this.postForm.reset();
          this.PostEditImage = '';
          this.submittedPost = false;
          this.projectService.project_detail(this.selectedProjectData._id).subscribe((res: any) => {
            this.allProjectPost = res.data.projectDetails.projectDetail.projectPost;
            for (let j = 0; j < this.allProjectPost.length; j++) {
              this.allProjectPost[j].timeago = 0;
              var postCreateAgo = this.allProjectPost[j].createdAt;
              this.allProjectPost[j].timeago = this.timeDifference(postCreateAgo);

              for (let k = 0; k < this.allProjectPost[j].comment?.length; k++) {
                this.allProjectPost[j].comment[k].timeagoComment = 0;
                var postCommentAgo = this.allProjectPost[j].comment[k].createdAt;
                this.allProjectPost[j].comment[k].timeagoComment = this.timeDifference(postCommentAgo);
              }
            }
          });
        },
        (err) => {
          this.toastrService.error('post not added');
          this.submittedPost = false;
        },
      );
    }
    else {
      obj['postid'] = this.postFeedId;
      obj['postindex'] = this.postIndex;
      if (obj['post_url']) {
        if (!this.imageSelect) {
          if (obj["postImageUrl"] != null) {
            if (obj["postImageUrl"].indexOf("https") == 0) {
              obj["postImageUrl"] = null;
            }
          } else {
            obj["postImageUrl"] = null;
          }

        }
      }
      this.projectService.updateProjectPost(obj).subscribe(
        (response) => {
          this.toastrService.success(response.message);
          this.postForm.reset();
          this.submittedPost = false;
          this.PostEditImage = '';
          this.projectService.project_detail(this.selectedProjectData._id).subscribe((res: any) => {
            this.allProjectPost = [];
            this.allProjectPost = res.data.projectDetails.projectDetail.projectPost;
            for (let j = 0; j < this.allProjectPost.length; j++) {
              this.allProjectPost[j].timeago = 0;
              var postCreateAgo = this.allProjectPost[j].createdAt;
              this.allProjectPost[j].timeago = this.timeDifference(postCreateAgo);

              for (let k = 0; k < this.allProjectPost[j].comment?.length; k++) {
                this.allProjectPost[j].comment[k].timeagoComment = 0;
                var postCommentAgo = this.allProjectPost[j].comment[k].createdAt;
                this.allProjectPost[j].comment[k].timeagoComment = this.timeDifference(postCommentAgo);
              }
            }
            this.postIsEdit = false;
          });
        },
        (err) => {
          this.toastrService.error('post not updated');
          this.submittedPost = false;
        },
      );
    }
  }

  deleteProjectPost(template: TemplateRef<any>, postId: any) {
    this.deletePostId = postId;
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  deletePostById() {
    const obj = {
      postId: this.deletePostId,
      projectId: this.selectedProjectData._id
    };
    this.projectService.deleteProjectPost(obj).subscribe(
      (response) => {
        this.modalRef.hide();
        this.projectService.project_detail(this.selectedProjectData._id).subscribe((res: any) => {
          this.allProjectPost = res.data.projectDetails.projectDetail.projectPost;
          for (let j = 0; j < this.allProjectPost.length; j++) {
            this.allProjectPost[j].timeago = 0;
            var postCreateAgo = this.allProjectPost[j].createdAt;
            this.allProjectPost[j].timeago = this.timeDifference(postCreateAgo);

            for (let k = 0; k < this.allProjectPost[j].comment?.length; k++) {
              this.allProjectPost[j].comment[k].timeagoComment = 0;
              var postCommentAgo = this.allProjectPost[j].comment[k].createdAt;
              this.allProjectPost[j].comment[k].timeagoComment = this.timeDifference(postCommentAgo);
            }
          }
        });
      },
      (err) => {
        this.modalRef.hide();
        this.toastrService.error('Post not delete');
      },
    );
  }

  addToPostLike(post_index: any, like_action: any) {
    let obj = {
      post_index: post_index,
      user: this.userid,
      project: this.selectedProjectData._id,
      like_action: like_action
    }
    this.projectService.addNewProjectPostLike(obj).subscribe(
      (response) => {
        this.toastrService.success(response.message);
        this.projectService.project_detail(this.selectedProjectData._id).subscribe((res: any) => {
          this.allProjectPost = res.data.projectDetails.projectDetail.projectPost;
        });
      },
      (err) => {
        this.toastrService.error('post not like');
      },
    );
  }

  CheckPostlike(postlikearray: any) {
    return postlikearray?.includes(this.userid);
  }

  addScheduleEvent() {

    this.submittedEvent = true;
    const formData = this.scheduleEventForm.getRawValue();
    formData.add_guest = formData.add_guest.map(usersList => {
      return usersList.item_id
    })
    let obj = this.scheduleEventForm.value;

    obj['user'] = this.userid;
    obj['add_guest'] = formData.add_guest;
    obj['project'] = this.selectedProjectData._id;


    if (this.scheduleEventForm.invalid) {
      return;
    }
    if (this.addSchedule) {
      this.projectService.addNewProjectEvent(obj).subscribe(
        (response) => {
          this.toastrService.success(response.message);
          this.submittedEvent = false;
          this.modalRef.hide();
          this.projectService.project_detail(this.selectedProjectData._id).subscribe((res: any) => {
            this.allProjectEvent = res.data.projectDetails.projectDetail.projectEvent;

          });
        },
        (err) => {
          this.toastrService.error('Event not added');
          this.submittedEvent = false;
          this.modalRef.hide();
        },
      );
    } else {

      let updateObj = this.scheduleEventForm.value;
      //updateObj['user'] = this.userid;
      //updateObj['add_guest'] = formData.add_guest;
      updateObj['project'] = this.selectedProjectData._id;
      updateObj['eventBy'] = this.userid;
      updateObj['_id'] = this.updateData._id;
      updateObj['eventGuest'] = []
      updateObj['eventGuest'] = formData.add_guest;

      if (this.scheduleEventForm.invalid) {
        return;
      }
      this.projectService.editNewProjectEvent(updateObj).subscribe(
        (response) => {
          this.toastrService.success(response.message);
          this.submittedEvent = false;
          this.modalRef.hide();
          this.projectService.project_detail(this.selectedProjectData._id).subscribe((res: any) => {
            this.allProjectEvent = res.data.projectDetails.projectDetail.projectEvent;

          });
        },
        (err) => {
          this.toastrService.error('Event not updated');
          this.submittedEvent = false;
          this.modalRef.hide();
        },
      );
    }

  }
  openRemoveEventScheduleDialog(template: TemplateRef<any>, event_action: any, post_index: any, event_index: any) {

    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
    this.event_action = event_action;
    this.post_index = post_index;
    this.event_index = event_index;
    this.project = this.selectedProjectData._id;
    this.user = this.userid;


  }

  removeEventSchedule() {
    let obj = {
      event_action: this.event_action,
      post_index: this.post_index,
      user_index: this.event_index,
      project: this.selectedProjectData._id,
      user: this.userid
    }

    this.projectService.RemoveProjectEvent(obj).subscribe(
      (response) => {
        this.modalRef.hide();
        this.toastrService.success(response.message);
        this.projectService.project_detail(this.selectedProjectData._id).subscribe((res: any) => {
          this.allProjectEvent = res.data.projectDetails.projectDetail.projectEvent;
        });
      },
      (err) => {
        this.modalRef.hide();
        this.toastrService.error('Event not deleted');
      },
    );


  }


  removeEventScheduleUser(event_action: any, post_index: any, event_index: any) {
    if (confirm("Are you sure to delete this user")) {
      let obj = {
        event_action: event_action,
        post_index: post_index,
        user_index: event_index,
        project: this.selectedProjectData._id,
        user: this.userid,
      }
      this.projectService.RemoveProjectEvent(obj).subscribe(
        (response) => {
          this.toastrService.success(response.message);
          this.projectService.project_detail(this.selectedProjectData._id).subscribe((res: any) => {
            this.allProjectEvent = res.data.projectDetails.projectDetail.projectEvent;
          });
        },
        (err) => {
          this.toastrService.error('Event not deleted');
        },
      );
    }
  }

  openEventUserList(template: TemplateRef<any>, event_index: any) {
    this.eventIndex = event_index;
    this.EventUserList = this.allProjectEvent[event_index].eventGuest;
    this.EventUserList.eventBy = this.allProjectEvent[event_index].eventBy;
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  postComment() {
    let datas = this.commentForm.value;
    if (datas.text == '') {
      this.Chatmsg_danger = true;
      return;
    }
    this.Chatmsg_danger = false;
    let data = {
      text: datas.text,
      user: this.userid,
      project: this.selectedProjectData._id,
    };
    this.projectService.postchat(this.selectedProjectData._id, data).subscribe((res) => {
      this.chatpost = res;
      this.getallchats();
    });
  }

  editProjectPost(feedData: any, index) {
    this.PostEditImage = null
    this.removePostImageFile = false;
    this.imageSelect = false;
    this.postForm.reset();
    this.postIsEdit = true;
    const updateDate = this.allProjectPost[index];
    this.postFeedId = updateDate?._id;
    this.postIndex = index;

    if (updateDate?.posturl) {
      this.PostEditImage = updateDate?.postImageUrl;
    }
    else {
      this.PostEditImage = updateDate?.postImageUrl;
    }

    this.postForm.patchValue({
      postText: updateDate?.postText,
      post_comment: updateDate?.postData,
    });

    if (updateDate?.posturl == '' && updateDate?.postType == 'image' && updateDate?.postImageUrl != '') {
      this.postForm.patchValue({
        postText: updateDate?.postText,
        post_comment: updateDate?.postData,
        postImageUrl: updateDate?.postImageUrl,
      });
    }
    else {
      this.postForm.patchValue({
        postText: updateDate?.postText,
        post_comment: updateDate?.postComment,
      });
    }
    if(updateDate?.posturl != '' && updateDate?.postType == 'image'){
      this.postForm.patchValue({
        postText: updateDate?.postText,
        post_comment: updateDate?.posturl,
        postImageUrl: updateDate?.postImageUrl,
      });
    }
  }

  getFeedData(id: string) {
    this.projectService.getAllFeeds(this.selectedProjectData._id).subscribe((res: any) => {
      this.response = res;
      this.getdata = res.data.projectFeeds;
      this.allFeeds = res.data.projectFeeds;
      // console.log("Project Feed",this.getdata)
    });
  }

  timeDifference(previous) {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;
    var preDate = new Date(previous);
    var curDate = new Date();
    var elapsed = curDate.valueOf() - preDate.valueOf();
    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + ' seconds ago';
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + 'm ago';
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + 'h ago';
    } else if (elapsed < msPerMonth) {
      return Math.round(elapsed / msPerDay) + 'd ago';
    } else if (elapsed < msPerYear) {
      return Math.round(elapsed / msPerMonth) + 'mth ago';
    } else {
      return Math.round(elapsed / msPerYear) + 'yrs ago';
    }
  }
  showText() {
    this.isReadMore = !this.isReadMore
  }
  ngOnDestroy() {
    // this.getdata.unsubscribe()
  }
  getFileName(url) {
    var fileName = url.split('/').pop();
    // console.log(fileName)
    return fileName.split('-').pop()
  }

}
