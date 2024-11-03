import { ProjectDomain } from '@/constants';
import React, { SVGProps } from 'react';
import { SVG_ASSETS } from '../../public/assets/icons';

const DomainIcon: React.FC<{ domain: ProjectDomain; props?: SVGProps<SVGElement> }> = ({ domain, props }) => {
	switch (domain) {
		case ProjectDomain.ALL:
			return <SVG_ASSETS.All stroke="green" {...props} />;
		case ProjectDomain.AUTOMATION_TOOLING:
			return <SVG_ASSETS.AutoMationTooling stroke="purple" {...props} />;
		case ProjectDomain.BLENDER:
			return <SVG_ASSETS.Blender {...props} />;
		case ProjectDomain.GAME:
			return <SVG_ASSETS.Game fill="orange" stroke="orange" style={{ transform: 'scale(0.76)' }} {...props} />;
		case ProjectDomain.REACT_NATIVE:
			return <SVG_ASSETS.ReactNative {...props} />;
		case ProjectDomain.FLUTTER:
			return <SVG_ASSETS.Flutter {...props} />;
		case ProjectDomain.UI_UX:
			return <SVG_ASSETS.Figma {...props} />;
		case ProjectDomain.WEB:
			return <SVG_ASSETS.Web fill="dodgerblue" {...props} />;
		default:
			<></>;
	}
};

export default DomainIcon;
