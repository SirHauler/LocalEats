import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type EagerBusinessHoursJSON = {
  readonly close?: number | null;
  readonly open?: number | null;
}

type LazyBusinessHoursJSON = {
  readonly close?: number | null;
  readonly open?: number | null;
}

export declare type BusinessHoursJSON = LazyLoading extends LazyLoadingDisabled ? EagerBusinessHoursJSON : LazyBusinessHoursJSON

export declare const BusinessHoursJSON: (new (init: ModelInit<BusinessHoursJSON>) => BusinessHoursJSON)

type EagerHoursJSON = {
  readonly monday?: BusinessHoursJSON | null;
  readonly tuesday?: BusinessHoursJSON | null;
  readonly wednesday?: BusinessHoursJSON | null;
  readonly thursday?: BusinessHoursJSON | null;
  readonly friday?: BusinessHoursJSON | null;
  readonly saturday?: BusinessHoursJSON | null;
  readonly sunday?: BusinessHoursJSON | null;
}

type LazyHoursJSON = {
  readonly monday?: BusinessHoursJSON | null;
  readonly tuesday?: BusinessHoursJSON | null;
  readonly wednesday?: BusinessHoursJSON | null;
  readonly thursday?: BusinessHoursJSON | null;
  readonly friday?: BusinessHoursJSON | null;
  readonly saturday?: BusinessHoursJSON | null;
  readonly sunday?: BusinessHoursJSON | null;
}

export declare type HoursJSON = LazyLoading extends LazyLoadingDisabled ? EagerHoursJSON : LazyHoursJSON

export declare const HoursJSON: (new (init: ModelInit<HoursJSON>) => HoursJSON)

type EagerAddressJSON = {
  readonly zipcode?: number | null;
  readonly streetAddress?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
}

type LazyAddressJSON = {
  readonly zipcode?: number | null;
  readonly streetAddress?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
}

export declare type AddressJSON = LazyLoading extends LazyLoadingDisabled ? EagerAddressJSON : LazyAddressJSON

export declare const AddressJSON: (new (init: ModelInit<AddressJSON>) => AddressJSON)

type ReviewMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VendorInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerReview = {
  readonly id: string;
  readonly user_id?: string | null;
  readonly vendor_id?: string | null;
  readonly rating?: number | null;
  readonly comment?: string | null;
  readonly s3_photo_bucket_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReview = {
  readonly id: string;
  readonly user_id?: string | null;
  readonly vendor_id?: string | null;
  readonly rating?: number | null;
  readonly comment?: string | null;
  readonly s3_photo_bucket_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Review = LazyLoading extends LazyLoadingDisabled ? EagerReview : LazyReview

export declare const Review: (new (init: ModelInit<Review, ReviewMetaData>) => Review) & {
  copyOf(source: Review, mutator: (draft: MutableModel<Review, ReviewMetaData>) => MutableModel<Review, ReviewMetaData> | void): Review;
}

type EagerVendorInfo = {
  readonly id: string;
  readonly userid?: string | null;
  readonly specialties?: string | null;
  readonly rating?: number | null;
  readonly hours?: HoursJSON | null;
  readonly address?: AddressJSON | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVendorInfo = {
  readonly id: string;
  readonly userid?: string | null;
  readonly specialties?: string | null;
  readonly rating?: number | null;
  readonly hours?: HoursJSON | null;
  readonly address?: AddressJSON | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VendorInfo = LazyLoading extends LazyLoadingDisabled ? EagerVendorInfo : LazyVendorInfo

export declare const VendorInfo: (new (init: ModelInit<VendorInfo, VendorInfoMetaData>) => VendorInfo) & {
  copyOf(source: VendorInfo, mutator: (draft: MutableModel<VendorInfo, VendorInfoMetaData>) => MutableModel<VendorInfo, VendorInfoMetaData> | void): VendorInfo;
}