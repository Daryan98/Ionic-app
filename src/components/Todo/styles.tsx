import styled from 'styled-components';

export const Divider = styled.hr`
  width: 40%;
  display: block;
  margin: 30px auto;
  background: #ccc;
`;

export const Header = styled.div`
width: 100%;
display: block;
height: 80px;
padding: 15px;
top: 0;
left: 0;
z-index: 5;
background: #001399;
box-shadow: 0px 2px 4px rgba(44, 62, 80, 0.15);
.input{
  width: 100%;
  height: 50px;
  float: left;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  text-indent: 18px;
  padding: 0 60px 0 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px 25px 25px 5px;
  border: 0px;
  box-shadow: none;
  outline: none;
}
.fab_button {
	--background: #FFF;
	--background-hover:#1A1936;
	--background-activated: rgba(0,19,153, 0.7);
	&:hover .plus_icon {
		fill: #FFF;
		transition: all .2s;
	}
}
.plus_icon {
  fill: #1A1939;
}
`

export const Todos = styled.div`
	width: 100%;
	height: 100%;
	background: #edf0f1;
	padding: 25px 20px;
	text-align: center;
	.todoos{
		display: block;
    text-align: center;
    font-size: 12px;
    color: #aaa;
	}
	ul.todo_list {
		padding: 0;
		margin: 0;
	}
	ul.todo_list li{
		width: 100%;
		min-height: 50px;
		list-style: none;
		text-align: left;
    font-size: 14px;
    font-weight: 500;
    color: #444;
    line-height: 22px;
    background: #fff;
    border-radius: 5px;
    position: relative;
    box-shadow: 0px 1px 2px rgba(44, 62, 80, 0.10);
    margin: 0 0 10px 0;
    padding: 14px 100px 14px 14px;
		word-break: break-word;
		div.icons {
			width: 100px;
			height: 50px;
			position: absolute;
			top: 0;
			right: 0;
			padding: 5px 0;
			div.icon {
				display: flex;
				justify-content: center;
				align-items: center;
				float: left;
				width: 50px;
				height: 40px;
				cursor: pointer;
				font-size: 16px;
				&.checkmark{
					border-left: 1px solid #efefef;
				}
				.trash {
					width: 30px;
					height: 30px;
					padding: 6px;
					border: 1.4px solid rgba(214,26,60, 0.6);
					fill: #D61A3C;
					border-radius: 4px;
				}
				.checkmark {
					width: 30px;
					height: 30px;
					padding: 6px;
					border: 1.4px solid rgba(37,185,154, 0.6);
					fill: #25b99a;
					border-radius: 4px;
					font-size: 17px;

				}
			}
		}
	}
	ul.todo_list.done li {
		text-decoration: line-through;
		.icons .icon {
			.checkmark {
				fill: #FFF;
				background: #25b99a;
			}
		}
	}
`;
