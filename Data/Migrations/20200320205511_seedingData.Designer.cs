﻿// <auto-generated />
using Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Data.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20200320205511_seedingData")]
    partial class seedingData
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.2");

            modelBuilder.Entity("Domain.Value", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("value")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("values");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            value = "Value 101"
                        },
                        new
                        {
                            Id = 2,
                            value = "Value 102"
                        },
                        new
                        {
                            Id = 3,
                            value = "Value 103"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}