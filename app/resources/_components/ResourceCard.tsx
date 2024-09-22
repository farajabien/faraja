import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Resource } from '../types';

type ResourceCardProps = {
  item: Resource;
  icon: React.ElementType;
};

const ResourceCard: React.FC<ResourceCardProps> = ({ item, icon: Icon }) => (
  <Card className='p-6 hover:shadow-lg transition-shadow'>
    <div className='flex items-center mb-4'>
      <Icon className='w-8 h-8 text-primary mr-4' />
      <h3 className='text-2xl font-semibold'>{item.title}</h3>
    </div>
    <p className='text-sm text-muted-foreground mb-4'>{item.description}</p>

    {item.features && (
      <div className='mb-4'>
        <h4 className='font-semibold mb-2'>Features:</h4>
        <ul className='list-disc list-inside'>
          {item.features.map((feature, index) => (
            <li key={index} className='text-sm'>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    )}

    {item.techStack && (
      <div className='mb-4'>
        <h4 className='font-semibold mb-2'>Tech Stack:</h4>
        <div className='flex flex-wrap gap-2'>
          {item.techStack.map((tech, index) => (
            <div
              key={index}
              className='flex items-center bg-secondary rounded-full px-3 py-1'>
              <tech.icon className='w-4 h-4 mr-2' />
              <span className='text-xs'>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    )}

    <div className='flex justify-between items-center mt-4'>
      <span className='font-bold text-lg'>{item.price}</span>
      <div className='space-x-2'>
        <Button asChild variant='outline'>
          <Link href={item.link} className='inline-flex items-center'>
            View Repo <ExternalLink className='ml-2 w-4 h-4' />
          </Link>
        </Button>
        {item.action && (
          <Button asChild variant='default'>
            <Link href={item.link} className='inline-flex items-center'>
              {item.action.icon && (
                <item.action.icon className='mr-2 w-4 h-4' />
              )}
              {item.action.label}
            </Link>
          </Button>
        )}
      </div>
    </div>
  </Card>
);

export default ResourceCard;