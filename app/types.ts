export class ProgramMetadata {
	degree_prog_id: number;
	inst_name_cn: string;
	inst_name_en: string;
	intro_cn: string;
	inst_type: string;
	country: string;
	rank: number;
	prog_name: string;
	is_indep: boolean;
	prog_type: string;
	prog_url: string;
	school: string;
	host_inst: string;
	awards_or_abet: string;
	apply_url: string;
	degree: string;
	duration: string;
	joint: string;
	min_credit: string;
	thesis: string;
	prog_goal: string;
	prog_outcome: string;
	has_culm_act: boolean;
	internship: string;
	has_minor: boolean;
	course_url: string;
	faculty: string;
	stu_hb_url: string;

	constructor(props: any) {
		this.degree_prog_id = props.degree_prog_id;
		this.inst_name_cn = props.inst_name_cn;
		this.inst_name_en = props.inst_name_en;
		this.intro_cn = props.intro_cn;
		this.inst_type = props.inst_type;
		this.country = props.country;
		this.rank = props.rank;
		this.prog_name = props.prog_name;
		this.is_indep = props.is_indep;
		this.prog_type = props.prog_type;
		this.prog_url = props.prog_url;
		this.school = props.school;
		this.host_inst = props.host_inst;
		this.awards_or_abet = props.awards_or_abet;
		this.apply_url = props.apply_url;
		this.degree = props.degree;
		this.duration = props.duration;
		this.joint = props.joint;
		this.min_credit = props.min_credit;
		this.thesis = props.thesis;
		this.prog_goal = props.prog_goal;
		this.prog_outcome = props.prog_outcome;
		this.has_culm_act = props.has_culm_act;
		this.internship = props.internship;
		this.has_minor = props.has_minor;
		this.course_url = props.course_url;
		this.faculty = props.faculty;
		this.stu_hb_url = props.stu_hb_url;
	}
}
