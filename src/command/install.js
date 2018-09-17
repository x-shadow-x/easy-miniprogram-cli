const program = require('commander');
const inquirer = require('inquirer');
import gitManager from '../utils/git-manager';
import config from '../config/index';

let git = new gitManager( config.repoType, config.registry );
program
	.command( 'install' )
	.description( 'install github project to local' )
	.action( async ( options ) => {
		
		listQuestion([{
			type: 'input',
			message: `user of repertory`,
			name: 'user',
			default: "x-shadow-x" // 默认值
		}, {
			type: 'input',
			message: `filter keyword`,
			name: 'keyword',
			default: "" // 默认值
		}]).then( async answers => {
			let choices = await git.fetchRepoList(answers.user);
			listQuestion([ {
				type: 'list',
				name: 'repo',
				message: 'which repo do you want to install?',
				choices: choices.filter(item => {
					return item.name.indexOf(answers.keyword) >= 0
				})
			} ]).then( async answers => {
				let result = await git.downloadGitRepo( answers.repo )
				console.log( result ? 'done' : result )
			} )
		} )
	} );
program.parse( process.argv ); //开始解析用户输入的命令

function listQuestion(questions) {
	return inquirer.prompt( questions );
}